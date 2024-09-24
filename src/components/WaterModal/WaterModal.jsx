import React from 'react';
import WaterForm from '../WaterForm/WaterForm';
import { fetchVolumes } from '../../redux/water/operations';


const WaterModal = ({ onClose, operationType, editData, onAfterAction }) => {
  const title = operationType === 'edit' ? 'Edit the entered amount of water' : 'Add water';

  const modalTitleStyle = {
    textAlign: 'center',
    color: 'var(--dark-blue)',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
    letterSpacing: '-0.2px',
    ...(window.innerWidth >= 768 && {
      fontSize: '28px',
      marginBottom: '30px',
      lineHeight: '32px',
      letterSpacing: '-0.28px',
    }),
  };

  const handleFormSubmit = (data) => {
    // Assuming you have an action to handle the create/update operation
    const action = operationType === 'edit' ? updateVolume : createVolume;

    dispatch(action(data))
      .unwrap()
      .then(() => {
        onAfterAction(); // Refresh the water list after successful submission
        onClose(); // Close the modal
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
    </div>
  );
};

export default WaterModal;
