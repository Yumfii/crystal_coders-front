import { CloudinaryContext, Image } from 'cloudinary-react';
import css from './AdvantagesSection.module.css';
import { Cloudinary } from 'cloudinary-core';

const AdvantatgesSection = () => {
  const cloudinary = new Cloudinary({
    cloud_name: 'dwyxffoux',
  });

  return (
    <CloudinaryContext cloudName="dwyxffoux">
      <div className={css.advantages}>
        <div className={css.customersContainer}>
          <ul className={css.customersList}>
            <li className={css.customersImg}>
              <Image publicId="tmbodlkkjpdiqirehfp6" alt="customer1" />
            </li>
            <li className={css.customersImg}>
              <Image publicId="gn4nssaqqugodu3pnzi2" alt="customer2" />
            </li>
            <li className={css.customersImg}>
              <Image publicId="og5jodgwvckh5kxgalyq" alt="customer3" />
            </li>
          </ul>

          <p className={css.customersText}>
            Our <span className={css.happy}> 25 happy</span> customers
          </p>
        </div>
        <div className={css.benefits}>
          <div className={css.habitContainer}>
            <div className={css.circle}></div>
            <p className={css.habitText}>Habit drive</p>
          </div>
          <div className={css.statistics}>
            <p className={css.statisticsText}>View statistics</p>
          </div>
          <div className={css.setting}>
            <p className={css.settingText}>Personal rate setting</p>
          </div>
        </div>
      </div>
    </CloudinaryContext>
  );
};

export default AdvantatgesSection;
