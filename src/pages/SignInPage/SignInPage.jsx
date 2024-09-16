import css from './SignInPage.module.css'; // Import CSS as a module

import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import SignInForm from 'components/SignInForm/SignInForm';

const SignInPage = () => {
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
