import { Form, Formik } from 'formik';
import { useId, useState } from 'react';
import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo/Logo';
import css from './SignUpForm.module.css';
import { signUp } from 'services/auth';
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
  // const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
  const repeatPasswordId = useId();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log(email, password, repeatPassword);
    try {
      const response = await signUp({
      "email": email,
      "password": password
      })
      console.log(response.data)
    }
    catch (er) {
      console.log(er.message);
    }
  };
  return (
    <div className={css.SignUpContainer}>
      <div className={css.logo}>
        <Logo />
      </div>
      <Formik
        initialValues={{ email: '', password: '', repeatPassword: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.SignUpForm} onSubmit={handleSubmit}>
          <h2 className={css.SignText}>Sign Up</h2>

          <div className={css.inputDiv}>
            <label htmlFor={emailId}>Email </label>
            <input
              name="email"
              // id={emailId}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="Enter your email"
              className={css.input}
              value={email}
            />
          </div>

          <div className={css.inputDiv}>
            <label htmlFor={passwordId}>Password </label>
            <input
              name="password"
              type="password"
              // id={passwordId}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder="Enter your password"
              className={css.input}
              value={password}
            />
          </div>

          <div className={css.inputDiv}>
            <label htmlFor={repeatPasswordId}>Repeat password </label>
            <input
              name="repeatPassword"
              type="password"
              // id={repeatPasswordId}
              onChange={(e) => {
                setRepeatPassword(e.target.value)
              }}
              placeholder="Repeat password"
              className={css.input}
              value={repeatPassword}
            />
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
