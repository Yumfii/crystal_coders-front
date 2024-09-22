import { CloudinaryContext, Image } from 'cloudinary-react';
import css from './AdvantagesSection.module.css';
import { useEffect, useState } from 'react';

const imageIds = {
  customer1: {
    nonRetina: 'tmbodlkkjpdiqirehfp6',
    retina: 'yj4j2yfgjtmur5lvrzka ',
  },
  customer2: {
    nonRetina: 'gn4nssaqqugodu3pnzi2',
    retina: 'jqj6k2vbrnbuqhtgblpr',
  },
  customer3: {
    nonRetina: 'og5jodgwvckh5kxgalyq',
    retina: 'dluks7qhsvduivuaaxrp',
  },
};
const AdvantatgesSection = () => {
  const [userCount, setUserCount] = useState(0);

  const getImageUrl = (baseId, isRetina) => {
    return isRetina ? imageIds[baseId].retina : imageIds[baseId].nonRetina;
  };

  const isRetina = window.matchMedia(
    '(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)'
  ).matches;

  const fetchUserCount = async () => {
    try {
      const response = await fetch(
        'https://crystal-coders-back.onrender.com/count'
      );
      const data = await response.json();
      setUserCount(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserCount();
  }, []);

  return (
    <CloudinaryContext cloudName="dwyxffoux">
      <div className={css.advantages}>
        <div className={css.customersContainer}>
          <ul className={css.customersList}>
            <li className={css.customersImg}>
              <Image
                publicId={getImageUrl('customer1', isRetina)}
                alt="customer1"
              />
            </li>
            <li className={css.customersImg}>
              <Image
                publicId={getImageUrl('customer2', isRetina)}
                alt="customer2"
              />
            </li>
            <li className={css.customersImg}>
              <Image
                publicId={getImageUrl('customer3', isRetina)}
                alt="customer3"
              />
            </li>
          </ul>

          <p className={css.customersText}>
            Our <span className={css.happy}> {userCount}</span> happy customers
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
