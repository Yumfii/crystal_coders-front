import AdvantatgesSection from '../../components/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import css from './SignUpPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const SignUpPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/tracker');
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className={css.SignUpPageContainer}>
      <SignUpForm />
      <div className={css.advantages}>
        <AdvantatgesSection />
      </div>
    </div>
  );
};

export default SignUpPage;
