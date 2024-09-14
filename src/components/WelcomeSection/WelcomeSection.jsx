

import css from "./WelcomeSection.module.css"
import Logo from "components/Logo/Logo"
import { NavLink } from "react-router-dom"
import { FaGoogle } from "react-icons/fa"


const WelcomeSection = () => {
  return (
    <div className={css.welcome}>
      <div className={css.logo}> < Logo/></div>

    <p className={css.subheader}> Record daily water intake and track</p>
    <h1 className={css.header}> Water consumption tracker</h1>
    <div className={css.nav}>

          <NavLink className={`${css.signup} ${css.btn}`}  to="/signup">
            Try tracker
          </NavLink>
          <NavLink className={`${css.signin} ${css.btn}`} to="/signin">
           Sign  In
          </NavLink>
          <NavLink className={`${css.Google} ${css.btn}`}><FaGoogle/></NavLink>

    </div>


            </div>
  )
}

export default WelcomeSection
