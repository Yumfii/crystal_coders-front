import React from 'react';
import { useDispatch } from 'react-redux';
import WaterForm from '../WaterForm/WaterForm';

import { fetchVolumes } from '../../redux/water/operations';


import { createVolume, updateVolume } from '../../redux/water/operations'; // Убедитесь, что эти импорты корректны

const WaterModal = ({ onClose, operationType, editData }) => {
  const dispatch = useDispatch();


  const title = operationType === 'edit' ? 'Edit the entered amount of water' : 'Add water';

  const handleFormSubmit = async (data) => {
    try {
      const action = operationType === 'edit' ? updateVolume : createVolume;

      await dispatch(action(data)).unwrap();

      onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>

      <h2 style={modalTitleStyle}>{title}</h2>
      <div>
        <WaterForm
          mode={operationType}
          onClose={onClose}
          initialData={editData}
          onSubmit={handleFormSubmit}
          onAfterAction={fetchVolumes} // Pass the handleFormSubmit to WaterForm
        />
      </div>

      <h2>{title}</h2>
      <WaterForm
        mode={operationType}
        onClose={onClose}
        initialData={editData}
        onSubmit={handleFormSubmit}
      />

    </div>
  );
};

export default WaterModal;
