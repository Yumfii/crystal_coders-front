// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AuthNav = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.nav}>
      {/* {!isLoggedIn &&  */}

      (
        <>
          <NavLink className={`${css.signup} ${css.btn}`}  to="/signup">
            Try tracker
          </NavLink>
          <NavLink className={`${css.signin} ${css.btn}`} to="/signin">
           Sign  In
          </NavLink>
        </>
      )
      {/* } */}
    </div>
  );
};

export default AuthNav;
