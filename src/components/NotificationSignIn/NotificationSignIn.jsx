import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from './NotificationSignIn.module.css';
import loginError from '../SignInForm/SignInForm';
const CustomToast = ({ navigate }) => (
  <div className={styles.customToast}>
    <p className={styles.customTitle}>
      The email or password of the user is incorrect!
    </p>

    <div className={styles.buttonCont}>
      <button
        className={styles.btnTry}
        onClick={() => window.location.reload()}
      >
        Please try again
      </button>
      <button className={styles.btnSign} onClick={() => navigate('/signup')}>
        Sign Up with new account
      </button>
    </div>
  </div>
);

const NotificationSignIn = () => {
  const navigate = useNavigate();
  const toastDisplayed = useRef(false);

  const notify = () => {
    toast.custom(<CustomToast navigate={navigate} />, {
      className: 'my-custom-toast',
      duration: 5000,
      position: 'top-center',
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  useEffect(() => {
    if (loginError && !toastDisplayed.current) {
      notify();
      toastDisplayed.current = true;
    }
  }, [loginError]);

  return <Toaster />;
};

export default NotificationSignIn;
