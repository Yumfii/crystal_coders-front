import React, { useState } from 'react';
import Calendar from 'components/Calendar/Calendar';
import CalendarPagination from 'components/CalendarPagination/CalendarPagination';
import { addMonths, subMonths } from 'date-fns';
import css from './MonthInfo.module.css';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [chooseDate, setChooseDate] = useState(null);
  //   const [waterConsumption, setWaterConsumption] = useState([]);

  const nextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };

  const previousMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1));
  };

  return (
    <div>
      <p>{chooseDate}</p>
      <div className={css.wrapper}>
        <p className={css.monthName}>Month</p>
        <CalendarPagination
          selectedDate={selectedDate}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
        />
      </div>
      <Calendar
        selectedDate={selectedDate}
        setChooseDate={setChooseDate}
        // waterConsumption={waterConsumption}
      />
    </div>
  );
};

export default MonthInfo;
