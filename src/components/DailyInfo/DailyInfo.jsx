import AddWaterBtn from 'components/AddWaterBtn/AddWaterBtn';
import ChooseDate from 'components/ChooseDate/ChooseDate';
import WaterList from 'components/WaterList/WaterList';
import css from './DailyInfo.module.css';
import React from 'react';

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
