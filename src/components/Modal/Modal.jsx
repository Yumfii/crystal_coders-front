import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.module.css';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ isOpen, onClose, children }) => {
  const [modalWidth, setModalWidth] = useState('343px');

  useEffect(() => {
    const updateModalSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1440) {
        setModalWidth('920px');
      } else if (screenWidth >= 768) {
        setModalWidth('768px');
      } else {
        setModalWidth('375px');
      }
    };


    updateModalSize();
    window.addEventListener('resize', updateModalSize);
    return () => window.removeEventListener('resize', updateModalSize);
  }, []);

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

  const modalBackdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(47, 47, 47, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1000,
    overflowY: 'auto',
    paddingTop: '64px',
  };

  const modalContentStyle = {
    background: 'var(--white)',
    padding: '40px',
    borderRadius: 'var(--border-radius)',
    position: 'relative',
    width: modalWidth,
    maxWidth: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
  };

  const modalCloseButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    width: '28px',
    height: '28px',
    transition: 'background-color var(--animation), color var(--animation)',
  };

  return ReactDOM.createPortal(
    <div style={modalBackdropStyle} onClick={handleBackdropClick}>
      <div style={modalContentStyle}>
        <button style={modalCloseButtonStyle} onClick={onClose}>
          <RxCross2 size={28} color="black" />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
