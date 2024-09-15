import { Field, Form, Formik } from 'formik';
import { useId, useState } from 'react';
import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import Logo from 'components/Logo/Logo';
import css from './SignUpForm.module.css';
// import { registerOperation } from '../../redux/auth/operations';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validationSchema = yup.object().shape({
  email: yup.string().trim().required('Email is required').matches(emailRegex, {
    message: 'Invalid email.',
  }),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Repeat password is required'),
});

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
  const repeatPasswordId = useId();

  // const handleSubmit = (values, actions) => {
  //   dispatch(registerOperation(values));
  //   actions.resetForm();
  // };
  return (
    <div className={css.SignUpContainer}>
      <div className={css.logo}>
        <Logo />
      </div>
      <Formik
        initialValues={{ email: '', password: '', repeatPassword: '' }}
        // onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.SignUpForm}>
          <h2 className={css.SignText}>Sign Up</h2>

          <div className={css.inputDiv}>
            <label htmlFor={emailId}>Email </label>
            <Field
              name="email"
              id={emailId}
              placeholder="Enter your email"
              className={css.input}
            />
          </div>

          <div className={css.inputDiv}>
            <label htmlFor={passwordId}>Password </label>
            <div className={css.wrapPass}>
              <Field
                name="password"
                type={passwordVisible ? 'text' : 'password'}
                id={passwordId}
                placeholder="Enter your password"
                className={css.input}
              />
              <button
                type="button"
                className={css.toggle}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className={css.inputDiv}>
            <label htmlFor={repeatPasswordId}>Repeat password </label>
            <div className={css.wrapPass}>
              <Field
                name="repeatPassword"
                type={passwordVisible ? 'text' : 'password'}
                id={repeatPasswordId}
                placeholder="Repeat password"
                className={css.input}
              />
              <button
                type="button"
                className={css.toggle}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>
          <button type="submit" className={css.btn}>
            Sign Up
          </button>
          <p className={css.text}>
            Already have account?{' '}
            <Link to="/signin" className={css.linkText}>
              Sign In
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
