import css from './SignInForm.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import GoogleBtn from 'components/GoogleBtn/GoogleBtn';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations';

import NotificationSignIn from '../../components/NotificationSignIn/NotificationSignIn';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

const SignInForm = () => {
  const dispatch = useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState(null); // Local error state

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async data => {
    const { email, password } = data;

    try {
      await dispatch(signIn({ email, password })).unwrap();
      reset();
    } catch (error) {
      setLoginError(error);
    }
  };

  return (
    <div className={css.infoContainer}>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.formContainer}>
        <form className={css.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <h1 className={css.title}>Sign In</h1>
          <div className={css.inputBox}>
            <div className={css.group}>
              <label htmlFor="email" className={css.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`${css.input} ${errors.email ? css.error : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <p className={css.error}>{errors.email.message}</p>
              )}
            </div>

            <div className={css.group}>
              <label htmlFor="password" className={css.label}>
                Password
              </label>
              <div className={css.wrapPass}>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  className={`${css.input} ${errors.password ? css.error : ''}`}
                  {...register('password')}
                />
                <button
                  type="button"
                  className={css.toggle}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
                {errors.password && (
                  <p className={css.error}>{errors.password.message}</p>
                )}
              </div>
              <NavLink to="/forgot-password" className={css.forgotPassword}>
                Forgot password?
              </NavLink>
            </div>
          </div>

          <button type="submit" className={css.signInBtn}>
            Sign In
          </button>

          <div className={css.offerCont}>
            <p className={css.signupoffer}>
              Don't have an account?&nbsp;
              <NavLink className={css.signuplink} to="/signup">
                Sign Up
              </NavLink>
            </p>
          </div>

          {/* Show Notification if there's a local login error */}
          {loginError && <NotificationSignIn />}
        </form>

        <p className={css.conc}>Or</p>
        <GoogleBtn />
      </div>
    </div>
  );
};

export default SignInForm;
