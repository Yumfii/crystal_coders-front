import WaterDailyNorma from 'components/WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from 'components/WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import { GoPlus } from 'react-icons/go';

const WaterMainInfo = () => {
  const value = 50;
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>AquaTrack</h1>
        <WaterDailyNorma />
        <WaterProgressBar value={value} />
        {/* AddWaterBtn */}
        <div className={css.wrapper}>
          <button type="button" className={css.addWaterBtnMainInfo}>
            <GoPlus size={22} />
            Add water
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterMainInfo;
