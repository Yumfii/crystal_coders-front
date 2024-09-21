import React from 'react';
import css from './WaterDetailedInfo.module.css';
import UserPanel from 'components/UserPanel/UserPanel';
import DailyInfo from 'components/DailyInfo/DailyInfo';

const WaterDetailedInfo = () => {
  return (
    <section className={css.section}>
      <UserPanel />
      <DailyInfo/>
      <div className={css.container}></div>
    </section>
  );
};

export default WaterDetailedInfo;
