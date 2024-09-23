import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import css from './GoogleBtnSignUp.module.css';

const GoogleBtnSignUp = () => {
  const handleGoogleLogin = () => {
    window.location.href =
      'https://crystal-coders-back.onrender.com/auth/get-oauth-url?callback=https://crystal-coders-front.vercel.app/confirm-google-auth';
  };

  return (
    <button className={css.Google} onClick={handleGoogleLogin}>
      <div className={css.icon}>
        <FcGoogle />
      </div>
      <p>Sign up with Google</p>
    </button>
  );
};

export default GoogleBtnSignUp;
