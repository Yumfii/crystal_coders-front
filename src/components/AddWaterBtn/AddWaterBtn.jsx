import React from 'react';
import css from './AddWaterBtn.module.css';
import { GoPlus } from 'react-icons/go';


const AddWaterBtn = ({ variant, onClick }) => {

  const styleBtn =
    variant === 'primary'
    ? `${css.addWaterBtnMainInfo} addWaterBtnMainInfo`  // added a global class here for the tour
    : `${css.addWaterBtnDetailedInfo} addWaterBtnDetailedInfo`; // added a global class for the tour

  const styleIcon =
    variant === 'primary' ? css.iconPrimaryBtn : css.iconSecondaryBtn;


  return (
    <>
      <button type="button" className={styleBtn} onClick={onClick}>
        <div className={styleIcon}>
          <GoPlus size={19} />
        </div>
        Add water
      </button>
    </>
  );
};

export default AddWaterBtn;

