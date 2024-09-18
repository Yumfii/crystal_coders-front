/* eslint-disable no-unused-vars */
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import { deleteWater } from '../../redux/water/operations';
import css from './DeleteWaterModal.module.css';

export const DeleteWaterModal = ({ modalIsOpen, closeModal, waterId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsLoading(() => true);
    dispatch(deleteWater(waterId))
      .unwrap()
      .then(() => {
        toast.success('Successfully deleted!');
        <Toaster position="top-center" reverseOrder={true} />;
      })
      .catch(error => {
        toast.error('Addition error!');
        <Toaster position="top-center" reverseOrder={true} />;
      });
  };

  const colorBtnClass = clsx(css.btn, css.colorBtn);

  const transparentBtnClass = clsx(css.btn, css.transparentBtn);

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
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
      </div>
    </Modal>
  );
};
