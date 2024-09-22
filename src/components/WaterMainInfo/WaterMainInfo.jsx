<<<<<<< HEAD
import WaterDailyNorma from '../../components/WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../../components/WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import AddWaterBtn from '../../components/AddWaterBtn/AddWaterBtn';
import Logo from '../../components/Logo/Logo';

const WaterMainInfo = () => {
  const value = 50;
=======
import WaterDailyNorma from 'components/WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from 'components/WaterProgressBar/WaterProgressBar';
import css from './WaterMainInfo.module.css';
import AddWaterBtn from 'components/AddWaterBtn/AddWaterBtn';
import Logo from 'components/Logo/Logo';
import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import WaterModal from 'components/WaterModal/WaterModal';

const WaterMainInfo = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const value = 50;

  const handleOpenModal = () => {
    setModalOpen(true);
  };


  const handleCloseModal = () => {
    setModalOpen(false);
  };


>>>>>>> 8d9d660e1cdb7dcf37023b26c0e836a9dafac675
  return (
    <div className={css.section}>
      <div className={css.container}>
        <Logo />
        <WaterDailyNorma />
        <WaterProgressBar value={value} />
<<<<<<< HEAD
        <AddWaterBtn variant="primary" />
      </div>
=======
        <AddWaterBtn variant="primary" onClick={handleOpenModal} />
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <WaterModal operationType="add" onClose={handleCloseModal} />
        </Modal>
      )}
>>>>>>> 8d9d660e1cdb7dcf37023b26c0e836a9dafac675
    </div>
  );
};

export default WaterMainInfo;
<<<<<<< HEAD
=======

>>>>>>> 8d9d660e1cdb7dcf37023b26c0e836a9dafac675
