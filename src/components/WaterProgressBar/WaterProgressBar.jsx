import React from 'react';
import css from './WaterProgressBar.module.css';

const WaterProgressBar = ({ value }) => {
  return (
    <div className={`${css.waterProgressBar} waterProgressBar` } >
      <p className={css.day}>Today</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        readOnly
        className={css.linearProgress}
        style={{
          background: `linear-gradient(to right, #9BE1A0  ${value}%, #F0EFF4 ${value}%)`,
        }}
      />
      <div className={css.values}>
        <div>0%</div>
        <div>50%</div>
        <div>100%</div>
      </div>
    </div>
  );
};

export default WaterProgressBar;
