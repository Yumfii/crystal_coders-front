import React from 'react';
import { getDaysInMonth } from 'date-fns';
import CalendarItem from '../../components/CalendarItem/CalendarItem';
import css from './Calendar.module.css';

const Calendar = ({ selectedDate, setSelectedDate, waterData = [] }) => {
  // Ensure waterData is an array
  if (!waterData || !Array.isArray(waterData) || waterData.length === 0) {
    return <div>No data available</div>; // Show a message if no data is available
  }

  const daysInMonth = getDaysInMonth(selectedDate);

  const getWaterPercentageForDay = (day) => {
    const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];

    const waterEntry = waterData.find((entry) => entry.date === dateString);

    // Return 0 if no entry is found or data is missing
    return waterEntry ? waterEntry.consumedPercentage || 0 : 0;
  };

  const handleDayClick = (day) => {
    const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(date);
  };

  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div>
      <ul className={css.listDays}>
        {daysArray.map((day) => (
          <li key={day}>
            <CalendarItem
              day={day}
              waterPercentage={getWaterPercentageForDay(day)}
              handleDayClick={handleDayClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
