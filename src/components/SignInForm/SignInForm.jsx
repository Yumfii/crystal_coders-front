import css from './SignInForm.module.css'; // Import CSS as a module

import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, ErrorMessage, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import { signIn } from 'services/auth';
import GoogleBtn from 'components/GoogleBtn/GoogleBtn';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});

const SignInForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await signIn({ email: email, password: password });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={css.infoContainer}>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.formContainer}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          //onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form
              autoComplete="off"
              className={css.form}
              noValidate
              onSubmit={handleSubmit}
            >
              <h1 className={css.title}>Sign In</h1>
              <div className={css.inputBox}>
                <div className={css.group}>
                  <label htmlFor="email" className={css.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your email"
                    className={`${css.input} ${
                      touched.email && errors.email ? css.error : ''
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.error}
                  />
                </div>
                <div className={css.group}>
                  <label htmlFor="password" className={css.label}>
                    Password
                  </label>
                  <div className={css.wrapPass}>
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={e => {
                        setPassword(e.target.value);
                      }}
                      className={`${css.input} ${
                        touched.password && errors.password ? css.error : ''
                      }`}
                    />
                    <button
                      type="button"
                      className={css.toggle}
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </button>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={css.error}
                    />
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInForm;
