import AdvantatgesSection from '../../components/AdvantagesSection/AdvantagesSection';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import css from './HomePage.module.css';
import '../../index.css';

const HomePage = () => {
  return (
    <div className={`${css.HomePageContainer} container`}>
      <WelcomeSection />
      <AdvantatgesSection />
    </div>
  );
};

export default HomePage;
