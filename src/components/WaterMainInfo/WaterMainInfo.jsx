import WaterDailyNorma from 'components/WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from 'components/WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import AddWaterBtn from 'components/AddWaterBtn/AddWaterBtn';

const WaterMainInfo = () => {
  const value = 50;
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>AquaTrack</h1>
        <WaterDailyNorma />
        <WaterProgressBar value={value} />
        <div className={css.wrapper}>
          <AddWaterBtn variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default WaterMainInfo;
