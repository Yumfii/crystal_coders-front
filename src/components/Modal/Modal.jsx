import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.module.css';
import { RxCross2 } from 'react-icons/rx';
import UserSettingsModal from 'components/UserSettingsModal/UserSettingsModal';

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
    padding: '40px 20px',
    borderRadius: 'var(--border-radius)',
    position: 'relative',
    width: '343px',
    maxWidth: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
  };

  const modalContentStyleLarge = {
    ...modalContentStyle,
    padding: '40px',
    width: '518px',
    maxHeight: '90vh',
  };

  const modalCloseButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '16px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    width: '24px',
    height: '24px',
    transition: 'background-color var(--animation), color var(--animation)',
  };

  const modalCloseButtonStyleLarge = {
    ...modalCloseButtonStyle,
    top: '20px',
    right: '20px',
    width: '28px',
    height: '28px',
  };

  return ReactDOM.createPortal(
    <div style={modalBackdropStyle} onClick={handleBackdropClick}>
      <div
        style={window.innerWidth >= 376 ? modalContentStyleLarge : modalContentStyle}
      >
        <button
          style={window.innerWidth >= 376 ? modalCloseButtonStyleLarge : modalCloseButtonStyle}
          onClick={onClose}
        >
          <RxCross2 size={window.innerWidth >= 376 ? 28 : 24} color="black" />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
