import React from 'react';
import css from './WaterDetailedInfo.module.css';
import UserPanel from 'components/UserPanel/UserPanel';

const WaterDetailedInfo = () => {
  return (
    <section className={css.section}>
      <UserPanel/>
      <div className={css.container}></div>
    </section>
  );
};

export default WaterDetailedInfo;
