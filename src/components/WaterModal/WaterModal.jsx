import React from 'react';
import { useDispatch } from 'react-redux';
import WaterForm from '../WaterForm/WaterForm';
import { createVolume, updateVolume } from '../../redux/water/operations';

const WaterModal = ({ onClose, operationType, editData }) => {
  const dispatch = useDispatch();

  const title = operationType === 'edit' ? 'Edit the entered amount of water' : 'Add water';

  const handleFormSubmit = async (data) => {
    try {
      const action = operationType === 'edit' ? updateVolume : createVolume;
      console.log(action);

      await dispatch(action(data)).unwrap();

      onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const modalTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div>

      <h2 >{title}</h2>
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
