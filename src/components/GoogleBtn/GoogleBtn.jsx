import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import css from './GoogleBtn.module.css';
import axios from 'axios';

const GoogleBtn = () => {
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get('https://crystal-coders-back.onrender.com/auth/get-oauth-url');

      if (response.status === 200 && response.data && response.data.data.url) {
        window.location.href = response.data.data.url;
      } else {
        console.error('Can`t get URL for Google OAuth');
      }
    } catch (error) {
      console.error('Error while gettin Google OAuth URL:', error);
    }
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
