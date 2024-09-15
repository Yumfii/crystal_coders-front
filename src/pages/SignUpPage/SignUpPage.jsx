import css from './SignUpPage.module.css';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import AdvantatgesSection from 'components/AdvantagesSection/AdvantagesSection';

const SignUpPage = () => {
  return (
    <div className={css.SignUpPageContainer}>
      <SignUpForm />
      <div className={css.advantatges}>
        <AdvantatgesSection />
      </div>
    </div>
  );
};

export default SignUpPage;
