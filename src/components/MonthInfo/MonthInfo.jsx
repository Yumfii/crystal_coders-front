import React, { useEffect, useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import CalendarPagination from '../../components/CalendarPagination/CalendarPagination';
import { addMonths, subMonths } from 'date-fns';
import css from './MonthInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRemainingWaterPercentage,
  fetchWaterConsumptionForMonth,
} from '../../redux/water/operations';

const MonthInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dispatch = useDispatch();
  const { waterConsumption, loading, error, remainingPercentage } = useSelector(state => state.water);

  useEffect(() => {
    if (selectedDate) {
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      const userId = localStorage.getItem('userId')?.trim();
      console.log(localStorage.getItem('userId'));

      if (userId) {
        dispatch(fetchWaterConsumptionForMonth(month, year, userId));
        dispatch(fetchRemainingWaterPercentage({ date: selectedDate.toISOString().split('T')[0] }));
      } else {
        console.error('User ID not found in localStorage.');
      }
    }
  }, [selectedDate, dispatch]);

  const nextMonth = () => {
    setSelectedDate(prevDate => addMonths(prevDate, 1));
  };

  const previousMonth = () => {
    setSelectedDate(prevDate => subMonths(prevDate, 1));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Ensure that waterConsumption and remainingPercentage have valid data before rendering
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
      {/* Only pass waterData if it contains valid entries */}
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        waterData={Array.isArray(waterConsumption) ? waterConsumption : []}
      />
    </div>
  );
};

export default MonthInfo;
