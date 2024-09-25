import React from 'react';
import { getDaysInMonth } from 'date-fns';
import CalendarItem from '../../components/CalendarItem/CalendarItem';
import css from './Calendar.module.css';

const Calendar = ({ selectedDate, setSelectedDate, waterData =[]}) => {
  const { waterConsumption = {}, remainingPercentage = {} } = waterData || {};

  const consumptionDay = waterConsumption.day ?? 'No data';
  const consumptionMonth = waterConsumption.month ?? 'No data';
  const remainingPercent = remainingPercentage?.percentage ?? 0;
  console.log('Water Data in Calendar:', waterData);
  const daysInMonth = getDaysInMonth(selectedDate);

  const getWaterPercentageForDay = day => {
    if (!waterData || waterData.length === 0) return 0;
    const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];

    const waterEntry = waterData.find(entry => entry.date === dateString);
    return waterEntry ? waterEntry.percentage : 0;
  };

  // useEffect(() => {
  //   if (waterConsumption) {
  //     console.log('Water Consumption:', waterConsumption);
  //   }
  // }, [waterConsumption]);

  // useEffect(() => {
  //   if (remainingPercentage) {
  //     console.log('Remaining Percentage:', remainingPercentage);
  //   }
  // }, [remainingPercentage]);


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
        {daysArray.map(day => (
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
