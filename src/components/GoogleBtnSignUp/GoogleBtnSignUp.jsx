import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import css from './GoogleBtnSignUp.module.css';
import { NavLink } from 'react-router-dom';

const GoogleBtnSignUp = () => {
  return (
    <NavLink className={css.Google} to="/auth/google">
      <div className={css.icon}>
        <FcGoogle />
      </div>
      <p>Sign up with Google</p>
    </NavLink>
  );
};

export default GoogleBtnSignUp;
