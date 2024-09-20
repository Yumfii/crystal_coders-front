import React from 'react';
import css from './CalendarItem.module.css';

const CalendarItem = ({ day, handleDayClick }) => {
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
