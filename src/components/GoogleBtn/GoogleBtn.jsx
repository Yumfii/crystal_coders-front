import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import css from './GoogleBtn.module.css';

const GoogleBtn = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'https://crystal-coders-back.onrender.com/auth/get-oauth-url';
  };

  return (
    <button className={css.Google} onClick={handleGoogleLogin}>
      <div className={css.icon}>
        <FcGoogle />
      </div>
      <p>Sign in with Google</p>
    </button>
  );
};

export default GoogleBtn;
