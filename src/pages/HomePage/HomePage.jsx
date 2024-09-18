import AdvantatgesSection from 'components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from 'components/WelcomeSection/WelcomeSection';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.HomePageContainer}>
      <WelcomeSection />
      <AdvantatgesSection />
    </div>
  );
};

export default HomePage;
