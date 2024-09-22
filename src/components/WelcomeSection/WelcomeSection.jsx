import React, { useState, useEffect } from 'react';
import css from './WelcomeSection.module.css';
import Logo from 'components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import GoogleBtn from 'components/GoogleBtn/GoogleBtn';
import { ReactTyped } from 'react-typed';

const WelcomeSection = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [subheaderVisible, setSubheaderVisible] = useState(false);

  useEffect(() => {
    const subheaderTimer = setTimeout(() => {
      setSubheaderVisible(true);
    }, 1000);

    const navTimer = setTimeout(() => {
      setNavVisible(true);
    }, 1500);

    return () => {
      clearTimeout(subheaderTimer);
      clearTimeout(navTimer);
    };
  }, []);

  return (
    <div className={css.welcome}>
      <div className={css.logo}>
        <Logo />
      </div>

      <p
        className={`${css.subheader} ${
          subheaderVisible ? css['subheader-visible'] : ''
        }`}
      >
        Record daily water intake and track
      </p>

      <h1 className={css.header}>
        <ReactTyped
          strings={['Water consumption tracker']}
          typeSpeed={30}
          loop={false}
          showCursor={false}
        />
      </h1>

      <div className={`${css.nav} ${navVisible ? css['nav-visible'] : ''}`}>
        <NavLink className={`${css.signup} ${css.btn}`} to="/signup">
          Try tracker
        </NavLink>
        <NavLink className={`${css.signin} ${css.btn}`} to="/signin">
          Sign In
        </NavLink>
        <div className={css.GoogleHomePage}>
          <GoogleBtn />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
