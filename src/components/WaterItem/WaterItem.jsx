import React from 'react';
import { FaWhiskeyGlass } from 'react-icons/fa6';
import { FiEdit2 } from 'react-icons/fi';
import { RxTrash } from 'react-icons/rx';
import css from './WaterItem.module.css';
import { format } from 'date-fns';

const WaterItem = ({ volume, time }) => {
  return (
    <>
      <div className={css.iconWrap}>
        <FaWhiskeyGlass className={css.iconGlass} size={20} />
      </div>
      <div className={css.information}>
        <span className={css.volume}>{volume} ml</span>
        <span className={css.time}>{format(time, 'H:mm')} AM</span>
      </div>
      <div className={css.control}>
        <button type="button" className={css.btnIcon}>
          <FiEdit2 />
        </button>
        <button type="button" className={css.btnIcon}>
          <RxTrash />
        </button>
      </div>
    </>
  );
};

export default WaterItem;