import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import css from './ResetPasswordForm.module.css';
import Logo from '../Logo/Logo';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const ResetPasswordForm = () => {
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const { password } = data;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    try {
      const response = await fetch('https://crystal-coders-back.onrender.com/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      if (response.ok) {
        setMessage('Your password has been reset successfully!');
      } else {
        setMessage('Something went wrong... Try again later');
      }

      reset();
    } catch (error) {
      setMessage('Something went wrong... Try again later');
    }
  };

  return (
    <div className={css.infoContainer}>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.formContainer}>
        <form className={css.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <h1 className={css.title}>Reset Password</h1>

          <div className={css.inputBox}>
            <div className={css.group}>
              <label htmlFor="password" className={css.label}>
                New Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your new password"
                className={`${css.input} ${errors.password ? css.error : ''}`}
                {...register('password')}
              />
              {errors.password && (
                <p className={css.error}>{errors.password.message}</p>
              )}
            </div>
          </div>

          <button type="submit" className={css.resetBtn}>
            Reset Password
          </button>

          {message && <p className={css.message}>{message}</p>}

          <div className={css.offerCont}>
            <p className={css.signInOffer}>
              Remember your password?&nbsp;
              <NavLink className={css.signInLink} to="/signin">
                Sign in
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
