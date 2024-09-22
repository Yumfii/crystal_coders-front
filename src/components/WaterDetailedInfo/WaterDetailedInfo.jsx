import React, { useState } from 'react';
import css from './WaterDetailedInfo.module.css';
import UserPanel from '../../components/UserPanel/UserPanel';
import DailyInfo from '../../components/DailyInfo/DailyInfo';

const WaterDetailedInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section className={css.section}>
      <div className={css.container}>
        <UserPanel />
        <DailyInfo selectedDate={selectedDate} />
        <MonthInfo
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </section>
  );
};

export default WaterDetailedInfo;
