import React from 'react';
import css from './WaterMainInfo.module.css';

const WaterMainInfo = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>AquaTrack</h1>
        {/* WaterDailyNorma */}
        <div className={css.dailyNorma}>
          <span className={css.numberLiters}>1.5 L</span>
          <p className={css.text}>My daily norma</p>
        </div>
        {/* WaterProgressBar */}
        <div className={css.waterProgressBar}>
          <p className={css.day}>Today</p>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            readOnly
            className={css.linearProgress}
          />
          <div className={css.values}>
            <div>0%</div>
            <div>50%</div>
            <div>100%</div>
          </div>
        </div>
        {/* AddWaterBtn */}
        <div className={css.wrapper}>
          <button type="button" className={css.addWaterBtn}>
            Add water
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterMainInfo;
