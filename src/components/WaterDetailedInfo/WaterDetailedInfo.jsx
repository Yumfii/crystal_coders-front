import React, { useState } from 'react';
import css from './WaterDetailedInfo.module.css';
import MonthInfo from 'components/MonthInfo/MonthInfo';
import DailyInfo from 'components/DailyInfo/DailyInfo';

const WaterDetailedInfo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section className={css.section}>
      <div className={css.container}>
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
