import css from './WaterMainInfo.module.css';
import { GoPlus } from 'react-icons/go';

const WaterMainInfo = () => {
  const value = 50;
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
            value={value}
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

        {/* AddWaterBtn */}
        <div className={css.wrapper}>
          <button type="button" className={css.addWaterBtn}>
            <GoPlus size={22} />
            Add water
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterMainInfo;
