import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import { deleteWater } from '../../redux/water/operations';
import css from './DeleteWaterModal.module.css';

const DeleteWaterModal = ({ modalIsOpen, closeModal, waterId }) => {
  const dispatch = useDispatch();

  if (!modalIsOpen) return null;

  const handleClick = () => {
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

export default DeleteWaterModal;
