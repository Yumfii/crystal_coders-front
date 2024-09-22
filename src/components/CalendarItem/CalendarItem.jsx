import React from 'react';
import css from './CalendarItem.module.css';
// import { format } from 'date-fns';

const CalendarItem = ({ day, handleDayClick }) => {
  // const formattedDay = format(day, 'd');
  return (
    <>
      <button
        style={{ backgroundColor: '#FFF' }}
        onClick={() => handleDayClick(day)}
        className={css.btnDay}
      >
        {day}
      </button>
    </>
  );
};

export default CalendarItem;
