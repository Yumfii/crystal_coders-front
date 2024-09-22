import React from 'react';
import {
  // eachDayOfInterval,
  // endOfMonth,
  getDaysInMonth,
  // startOfMonth,
} from 'date-fns';
import CalendarItem from 'components/CalendarItem/CalendarItem';
import { getDaysInMonth } from 'date-fns';
import CalendarItem from '../../components/CalendarItem/CalendarItem';
import css from './Calendar.module.css';

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
  // const daysInMonth = eachDayOfInterval({
  //   start: startOfMonth(selectedDate),
  //   end: endOfMonth(selectedDate),
  // });

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
