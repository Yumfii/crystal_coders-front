import React from 'react';
import css from './WaterList.module.css';
import WaterItem from '../../components/WaterItem/WaterItem';
import Modal from '../../components/Modal/Modal';
import WaterModal from '../../components/WaterModal/WaterModal';
import  { useState } from 'react';

const waterData = [
  {
    volumeId: '60d5ec49b4dca3576c1c1bde',
    userId: '60d5ec49b4dca3576c1c1bdf',
    volume: 250,
    time: '2023-09-18T08:00:00Z',
  },
  {
    volumeId: '60d5ec49b4dca3576c1c1bdr',
    userId: '60d5ec49b4dca3576c1c1bdf',
    volume: 500,
    time: '2023-09-18T10:00:00Z',
  },
  {
    volumeId: '60d5ec49b4dca3576c1c1bdt',
    userId: '60d5ec49b4dca3576c1c1bdf',
    volume: 300,
    time: '2023-09-18T12:00:00Z',
  },
  {
    volumeId: '60d5ec49b4dca3576c1c1bdy',
    userId: '60d5ec49b4dca3576c1c1bdf',
    volume: 150,
    time: '2023-09-18T14:00:00Z',
  },
  {
    volumeId: '60d5ec49b4dca3576c1c1bdu',
    userId: '60d5ec49b4dca3576c1c1bdf',
    volume: 150,
    time: '2023-09-18T14:00:00Z',
  },
  {
    volumeId: '60d5ec49b4dca3576c1c1bdi',
    userId: '60d5ec49b4dca3576c1c1bdf',
    volume: 150,
    time: '2023-09-18T15:00:00Z',
  },
  {
    volumeId: '60d5ec49b4dca3576c1c1bdo',
    userId: '60d5ec49b4dca3576c1c1bdf',
    volume: 150,
    time: '2023-09-18T17:00:00Z',
  },
];

const WaterList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleOpenEditModal = (volume, time) => {
    setEditData({ volume, time });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditData(null);
  };
  
  return (
    <div>
      <ul className={css.list}>
        {waterData.map(({ volumeId, volume, time }) => (
          <li key={volumeId} className={css.item}>
            <WaterItem volume={volume} time={time} onEdit={handleOpenEditModal} />
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
           <WaterModal operationType="edit" onClose={handleCloseModal} editData={editData} />
        </Modal>
      )}
    </div>
  );
};

export default WaterList;
