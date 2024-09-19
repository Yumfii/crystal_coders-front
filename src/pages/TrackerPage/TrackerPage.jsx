import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from 'components/WaterMainInfo/WaterMainInfo';
import css from './TrackerPage.module.css';
import React from 'react';

const TrackerPage = () => {
  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
