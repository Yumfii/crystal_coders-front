import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import Logo from 'components/Logo/Logo';
import css from './SignUpForm.module.css';

export const validationSchema = yup.object().shape({
  email: yup.string().trim().required('Email is required').matches(emailRegex, {
    message: 'Invalid email.',
  }),
  password: yup.string().trim().required('Password is required').min(8),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(registerOperation(values));
    actions.resetForm();
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
        <Form className={css.SignUpForm}>
          <h2 className={css.SignText}>Sign Up</h2>
          <label htmlFor={emailId}>Email </label>
          <Field name="email" id={emailId} placeholder="Enter your email" />
          <br />
          <label htmlFor={passwordId}>Password </label>
          <Field
            name="password"
            type="password"
            id={passwordId}
            placeholder="Enter your password"
          />
          <br />
          <label htmlFor={passwordId}>Repeat password </label>
          <Field
            name="repeatPassword"
            type="password"
            id={passwordId}
            placeholder="Repeat password"
          />
          <hr />
          <button type="submit" className={css.btn}>
            Sign Up
          </button>
          <p>
            Already have account? <Link to="/signin">Sign In</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
