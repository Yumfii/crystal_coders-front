import React from 'react';
import css from './DailyInfo.module.css';
import AddWaterBtn from '../../components/AddWaterBtn/AddWaterBtn';
import WaterList from '../../components/WaterList/WaterList';
import ChooseDate from '../../components/ChooseDate/ChooseDate';

const DailyInfo = ({ selectedDate }) => {
  return (
    <div>
      <div className={css.wrapper}>
        <ChooseDate selectedDate={selectedDate} />
        <AddWaterBtn variant="secondary" />
      </div>
      <WaterList />
    </div>
  );
};

export default DailyInfo;
