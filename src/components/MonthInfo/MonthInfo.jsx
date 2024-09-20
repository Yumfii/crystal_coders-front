import React, { useState } from 'react';
import Calendar from 'components/Calendar/Calendar';
import CalendarPagination from 'components/CalendarPagination/CalendarPagination';
import { addMonths, format, isSameDay, subMonths } from 'date-fns';
import css from './MonthInfo.module.css';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setSelectedDate(prevDate => addMonths(prevDate, 1));
  };

  const previousMonth = () => {
    setSelectedDate(prevDate => subMonths(prevDate, 1));
  };

  const today = new Date();

  const isToday = isSameDay(today, selectedDate);

  return (
    <div>
      <p>{isToday ? 'Today' : format(selectedDate, 'd, MMMM')}</p>
      <div className={css.wrapper}>
        <p className={css.monthName}>Month</p>
        <CalendarPagination
          selectedDate={selectedDate}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
        />
      </div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default MonthInfo;
