import css from './SignInForm.module.css'; // Import CSS as a module
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import { signIn } from '../../redux/auth/operations';
import GoogleBtn from 'components/GoogleBtn/GoogleBtn';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    const { email, password } = data;
    dispatch(signIn({ email, password }));
    reset();
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

            <p className={css.conc}>Or</p>
            <GoogleBtn />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
