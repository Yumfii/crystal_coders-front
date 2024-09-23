import AdvantatgesSection from '../../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import css from './HomePage.module.css';
import '../../index.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
// import { refresh } from '../../redux/auth/operations.js';

const fetchUser = async () => {
  try {
    const response = await fetch(
      // 'https://crystal-coders-back.onrender.com/auth/refresh',
      'http://localhost:3000/auth/refresh',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );
    const data = await response.json();
    console.log(data);
    // setUserCount(data.data);
  } catch (err) {
    console.error(err);
  }
};

const HomePage = () => {
  useEffect(() => {
    fetchUser();
    // console.log('qwe');

    // const selfInvokingFunc = async () => {};
    // selfInvokingFunc();
  }, []);

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
