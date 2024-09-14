import './SignInPage.module.css';

import Logo from '../../components/Logo/Logo';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import SignInForm from 'components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <div className="main-container">
      <div className="info-form-container">
        <Logo />
        <SignInForm />
      </div>

      <div className="image-container">
        <AdvantagesSection />
      </div>
    </div>
  );
};
export default SignInPage;
