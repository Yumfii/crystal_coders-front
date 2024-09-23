import React from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import { deleteVolume } from '../../redux/water/operations';
import css from './DeleteWaterModal.module.css';

const DeleteWaterModal = ({ modalIsOpen, closeModal, waterId, onAfterAction }) => {
  const dispatch = useDispatch();

  if (!modalIsOpen) return null;

  const handleClick = () => {
    dispatch(deleteVolume(waterId))
      .unwrap()
      .then(() => {
        toast.success('Successfully deleted!');
        onAfterAction(); // Call the function to update the list
        closeModal(); // Close modal after successful deletion
      })
      .catch(error => {
        toast.error('Error deleting entry!');
      });
  };

  const colorBtnClass = clsx(css.btn, css.colorBtn);
  const transparentBtnClass = clsx(css.btn, css.transparentBtn);

  return (
    <div className={css.modalBox}>
      <h3 className={css.modalTitle}>Delete entry</h3>
      <p className={css.modalText}>
        Are you sure you want to delete the entry?
      </p>
      <div className={css.btnBox}>
        <button className={colorBtnClass} onClick={handleClick}>
          Delete
        </button>
        <button className={transparentBtnClass} onClick={closeModal}>
          Cancel
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
};

export default DeleteWaterModal;
