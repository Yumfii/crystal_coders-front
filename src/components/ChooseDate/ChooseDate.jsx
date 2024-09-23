import { format, isSameDay } from 'date-fns';
import css from './ChooseDate.module.css';
import React from 'react';

const ChooseDate = ({ selectedDate }) => {
  const today = new Date();

  const isToday = isSameDay(today, selectedDate);
  return (
    <div>
      <p className={`${css.selectedDate} selectedDate`}>
        {isToday ? 'Today' : format(selectedDate, 'd, MMMM')}
      </p>
    </div>
  );
};

export default ChooseDate;
