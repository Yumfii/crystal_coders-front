import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import Logo from '../Logo/Logo';
import React, { useState } from 'react';
import ModalSmall from '../ModalSmall/ModalSmall';
import WaterModal from '../WaterModal/WaterModal';

const WaterMainInfo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const value = 50;

  const handleOpenModal = () => {
    setModalOpen(true);
  };


  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div className={css.section}>
      <div className={css.container}>
        <Logo />
        <WaterDailyNorma />
        <WaterProgressBar value={value} />
        <AddWaterBtn variant="primary" onClick={handleOpenModal} />
      </div>
      {isModalOpen && (
        <ModalSmall isOpen={isModalOpen} onClose={handleCloseModal}>
            <WaterModal operationType="add" onClose={handleCloseModal} />
        </ModalSmall>
      )}
    </div>
  );
};

export default WaterMainInfo;
