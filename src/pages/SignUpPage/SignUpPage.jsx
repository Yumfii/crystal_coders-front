import AdvantatgesSection from '../../components/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import css from './SignUpPage.module.css';

const SignUpPage = () => {
  return (
    <div className={css.SignUpPageContainer}>
      <SignUpForm />
      <div className={css.advantages}>
        <AdvantatgesSection />
      </div>
    </div>
  );
};

export default SignUpPage;
