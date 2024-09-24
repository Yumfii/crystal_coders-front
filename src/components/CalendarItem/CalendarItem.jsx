import React from 'react';
import css from './CalendarItem.module.css';

const CalendarItem = ({ day, handleDayClick, waterPercentage }) => {
  const getButtonStyle = () => {
    if (waterPercentage === 0) {
      return { backgroundColor: '#fff' };
    } else  (waterPercentage < 100); {
      return { backgroundColor: 'rgba(50, 63, 71, 0.20)' };
    }
  };

  return (
    <>
      <button
        style={getButtonStyle()}
        onClick={() => handleDayClick(day)}
        className={css.btnDay}
      >
        {day}
        <span className={css.waterPercentage}>{waterPercentage}%</span>
      </button>
    </>
  );
};

export default CalendarItem;
