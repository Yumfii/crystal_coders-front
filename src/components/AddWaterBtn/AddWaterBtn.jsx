import React from 'react';
import css from './AddWaterBtn.module.css';
import { GoPlus } from 'react-icons/go';

const AddWaterBtn = ({ variant }) => {
  const styleBtn =
    variant === 'primary'
      ? css.addWaterBtnMainInfo
      : css.addWaterBtnDetailedInfo;

  const styleIcon =
    variant === 'primary' ? css.iconPrimaryBtn : css.iconSecondaryBtn;

  return (
    <button type="button" className={styleBtn}>
      <GoPlus className={styleIcon} />
      Add water
    </button>
  );
};

export default AddWaterBtn;
