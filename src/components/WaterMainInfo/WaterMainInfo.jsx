import WaterDailyNorma from '../../components/WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../../components/WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import AddWaterBtn from '../../components/AddWaterBtn/AddWaterBtn';
import Logo from '../../components/Logo/Logo';

const WaterMainInfo = () => {
  const value = 50;
  return (
    <div className={css.section}>
      <div className={css.container}>
        <Logo />
        <WaterDailyNorma />
        <WaterProgressBar value={value} />
        <AddWaterBtn variant="primary" />
      </div>
    </div>
  );
};

export default WaterMainInfo;
