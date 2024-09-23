import AdvantatgesSection from '../../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import css from './HomePage.module.css';
import '../../index.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    console.log(document.cookie);
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
