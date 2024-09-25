import css from './SignInPage.module.css';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import SignInForm from '../../components/SignInForm/SignInForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const SignInPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/tracker');
    }
  }, [isLoggedIn, navigate]);

  return (
    <motion.div
      className={`${css.main} container`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <SignInForm />
      <div className={css.advantagesSection}>
        <AdvantagesSection />
      </div>
    </motion.div>
  );
};

export default SignInPage;
