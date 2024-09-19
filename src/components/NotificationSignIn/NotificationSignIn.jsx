import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import './toast.css';
import css from './NotificationSignIn.modules.css';
const CustomToast = ({ navigate }) => (
  <div className={css.customToast}>
    <p>The email or password of the user is incorrect!</p>

    <div className={css.buttonCont}>
      <button className={css.btnTry} onClick={() => window.location.reload()}>
        Please try again
      </button>
      <button className={css.btnSign} onClick={() => navigate('/signup')}>
        Sign Up with new account
      </button>
    </div>
  </div>
);

const NotificationSignIn = () => {
  const navigate = useNavigate();

  const notify = () => {
    toast(<CustomToast navigate={navigate} />, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  useEffect(() => {
    notify();
  }, []);

  return <ToastContainer />;
};

export default NotificationSignIn;
