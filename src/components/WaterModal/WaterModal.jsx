import React from 'react';
import Modal from '../Modal/Modal';
import WaterForm from '../WaterForm/WaterForm';

const WaterModal = ({ isOpen, onClose, operationType }) => {
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 style={modalTitleStyle}>{title}</h2>
      <div>
        <WaterForm mode={operationType} onClose={onClose} />
      </div>
    </Modal>
  );
};

export default WaterModal;
