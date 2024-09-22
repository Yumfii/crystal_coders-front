import React, { useState } from 'react';
import css from './AddWaterBtn.module.css';
import { GoPlus } from 'react-icons/go';
import WaterModal from '../WaterModal/WaterModal';

const AddWaterBtn = ({ variant }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styleBtn =
    variant === 'primary'
    ? `${css.addWaterBtnMainInfo} addWaterBtnMainInfo`  // added a global class here for the tour
    : `${css.addWaterBtnDetailedInfo} addWaterBtnDetailedInfo`; // added a global class for the tour

  const styleIcon =
    variant === 'primary' ? css.iconPrimaryBtn : css.iconSecondaryBtn;

  const handleAddWater = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" className={styleBtn} onClick={handleAddWater}>
        <div className={styleIcon}>
          <GoPlus size={19} />
        </div>
        Add water
      </button>
      {isModalOpen && <WaterModal onClose={handleCloseModal} />}
    </>
  );
};

export default AddWaterBtn;
