import css from './SignInPage.module.css'; // Import CSS as a module

import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import SignInForm from 'components/SignInForm/SignInForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SignInPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/tracker');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={css.main}>
      <SignInForm />
      <div className={css.advantagesSection}>
        <AdvantagesSection />
      </div>
    </div>
  );
};

export default SignInPage;
