import React from 'react';
import { format, getDaysInMonth } from 'date-fns';
import CalendarItem from 'components/CalendarItem/CalendarItem';
import css from './Calendar.module.css';

const Calendar = ({ selectedDate, setChooseDate }) => {
  const daysInMonth = getDaysInMonth(selectedDate);

  // const getDayStyle = waterData => {
  //   const percentage = (waterData.consumed / waterData.dailyGoal) * 100;
  //   if (percentage < 100) return { backgroundColor: 'rgba(50, 63, 71, 0.20)' };
  //   if (percentage >= 100) return { backgroundColor: '#FFF' };
  // };

  const handleDayClick = day => {
    const date = format(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day),
      'd, MMMM'
    );
    setChooseDate(date);
  };

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  return (
    <div>
      <ul className={css.listDays}>
        <CalendarItem daysArray={daysArray} handleDayClick={handleDayClick} />
      </ul>
    </div>
  );
};

export default Calendar;
