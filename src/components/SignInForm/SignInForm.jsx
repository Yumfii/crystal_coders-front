import './SignInForm.module.css';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signIn } from '../redux/auth/operations';
import { Formik, Field, ErrorMessage, Form } from 'formik';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(signIn(values))
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(error => {
        console.log('login error', error);
      });
    resetForm();
  }; // код для dispatch'у контактів за допомогою операції signIn в redux
  return (
    <div className="signin-form-container">
      <h1 className="signin-title">Sign In</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className="signin-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="form-field"
            />
            <ErrorMessage name="email" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="form-field"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  href={`/path-to-icons.svg#${
                    passwordVisible ? 'eye' : 'eye-slash'
                  }`}
                ></use>
              </svg>
            </button>
            <ErrorMessage
              name="password"
              component="div"
              className="form-error"
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
          <p className="signup-offer">
            Don't have an account?
            <a href className="signup-link">
              Sign In
            </a>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;
