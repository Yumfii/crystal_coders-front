import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import css from './LogOutModal.module.css';
import { useNavigate } from 'react-router-dom';

const LogOutModal = ({ modalIsOpen, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    window.setTimeout(() => {
      dispatch(logOut());
      closeModal();
      navigate('/');
    }, 300);
  };

  const colorBtnClass = clsx(css.btn, css.colorBtn);

  const transparentBtnClass = clsx(css.btn, css.transparentBtn);

  return (
    <div className={css.modalBox}>
      <h3 className={css.modalTitle}>Log out</h3>
      <p className={css.modalText}>Do you really want to leave?</p>
      <div className={css.btnBox}>
        <button className={colorBtnClass} onClick={handleClick}>
          Log out
        </button>
        <button className={transparentBtnClass} onClick={() => closeModal()}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
