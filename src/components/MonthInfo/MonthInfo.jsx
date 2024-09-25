import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import CalendarPagination from '../../components/CalendarPagination/CalendarPagination';
import { addMonths, subMonths } from 'date-fns';
import css from './MonthInfo.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const MonthInfo = ({ selectedDate, setSelectedDate }) => {
  const dispatch = useDispatch();
  // !! Check how to get data about percentage of the water
  const [waterData, loading, error] = useSelector(state => state.water);

    // !! Check the part above

  const nextMonth = () => {
    setSelectedDate(prevDate => addMonths(prevDate, 1));
  };

  const previousMonth = () => {
    setSelectedDate(prevDate => subMonths(prevDate, 1));
  };



  return (
    <div className={`${css.monthlyInfo} monthlyInfo`}>
      <div className={css.monthWrapper}>
        <p className={css.monthName}>Month</p>
        <CalendarPagination
          selectedDate={selectedDate}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
        />
      </div>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}
       waterData={waterData}
       />
    </div>
  );
};

export default MonthInfo;
