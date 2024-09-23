import React from 'react';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  return (
    <div className={`${css.dailyNorma} dailyNorma`}>
      <span className={css.numberLiters}>1.5 L</span>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
