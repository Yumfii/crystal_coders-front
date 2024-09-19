import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.module.css';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          <RxCross2 size="28" color="black" />
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;

// import React, { useState } from 'react';
// import Modal from './Modal';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={handleOpenModal}>Open Modal</button>
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//       <p>children.</p>
//       </Modal>
//     </div>
//   );
// };

// export default App;
