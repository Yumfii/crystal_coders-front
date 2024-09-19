import React from 'react';
import css from './CalendarItem.module.css';

const CalendarItem = ({ daysArray, handleDayClick }) => {
  return (
    <>
      {daysArray.map(day => {
        return (
          <li key={day}>
            <button
              style={{ backgroundColor: '#FFF' }}
              onClick={() => handleDayClick(day)}
              className={css.btnDay}
            >
              {day}
            </button>
          </li>
        );
      })}
    </>
  );
};

export default CalendarItem;
