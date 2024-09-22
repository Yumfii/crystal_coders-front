import React from 'react';
import { getDaysInMonth } from 'date-fns';
import css from './Calendar.module.css';
import CalendarItem from '../../components/CalendarItem/CalendarItem';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const daysInMonth = getDaysInMonth(selectedDate);

  const handleDayClick = day => {
    const date = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    setSelectedDate(date);
  };

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  return (
    <div>
      <ul className={css.listDays}>
        {daysArray.map((day, index) => (
          <li key={index}>
            <CalendarItem day={day} handleDayClick={handleDayClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
