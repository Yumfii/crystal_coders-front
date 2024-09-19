import React from 'react';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from 'components/MonthInfo/MonthInfo';

const WaterDetailedInfo = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <MonthInfo />
      </div>
    </section>
  );
};

export default WaterDetailedInfo;
