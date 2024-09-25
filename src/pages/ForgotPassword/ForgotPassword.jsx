import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import AdvantatgesSection from '../../components/AdvantagesSection/AdvantagesSection';
import { motion } from 'framer-motion';
import css from './ForgotPassword.module.css';

const ForgotPasswordPage = () => {
  return (
    <motion.div
      className={`${css.ForgotContainer} container`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <ForgotPasswordForm />
      <div className={css.advantages}>
        <AdvantatgesSection />
      </div>
    </motion.div>
  );
};

export default ForgotPasswordPage;
