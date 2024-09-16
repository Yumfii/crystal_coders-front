import React from 'react';
import Modal from './Modal';
import WaterForm from './WaterForm';
import './WaterModal.module.css';

const WaterModal = ({ isOpen, onClose, operationType }) => {

  const title = operationType === 'edit' ? 'Edit the entered amount of water' : 'Add water';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='modal-title'>{title}</h2>
      <div>
        <WaterForm mode={operationType} onClose={onClose} />
      </div>
    </Modal>
  );
};

export default WaterModal;



// import React, { useState } from 'react';
// import WaterModal from './WaterModal';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [operationType, setOperationType] = useState('add');

//   const handleOpenAdd = () => {
//     setOperationType('add');
//     setIsModalOpen(true);
//   };

//   const handleOpenEdit = () => {
//     setOperationType('edit');
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={handleOpenAdd}>Add Water</button>
//       <button onClick={handleOpenEdit}>Edit Water</button>

//       <WaterModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         operationType={operationType}
//       />
//     </div>
//   );
// };

// export default App;



