import AdvantatgesSection from '../../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import css from './HomePage.module.css';
import '../../index.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser, getUserById } from '../../redux/auth/operations.js';
// import { refresh } from '../../redux/auth/operations.js';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const session = await dispatch(fetchUser()).unwrap();

        if (session) {
          await dispatch(
            getUserById({
              userId: session.data.userId,
              accessToken: session.data.accessToken,
            })
          ).unwrap();
        }
      } catch (error) {
        console.error('Error restoring session:', error);
      }
    };

    restoreSession();
  }, [dispatch]);
  return (
    <motion.div
      className={`${css.HomePageContainer} container`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <WelcomeSection />
      <AdvantatgesSection />
    </motion.div>
  );
};

export default HomePage;
