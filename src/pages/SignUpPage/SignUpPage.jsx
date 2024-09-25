import AdvantatgesSection from '../../components/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import css from './SignUpPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/tracker');
    }
  }, [isLoggedIn, navigate]);

  return (
    <motion.div
      className={`${css.SignUpPageContainer} container`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <SignUpForm />
      <div className={css.advantages}>
        <AdvantatgesSection />
      </div>
    </motion.div>
  );
};

export default SignUpPage;
