
import AuthNav from "components/AuthNav/AuthNav"
import css from "./WelcomeSection.module.css"
import Logo from "components/Logo/Logo"


const WelcomeSection = () => {
  return (
    <div className={css.welcome }>
    <Logo/>
    <p className={css.subheader}> Record daily water intake and track</p>
    <h1 className={css.header}> Water consumption tracker</h1>
    <div className={css.buttons}>
        <AuthNav/>
    </div>


            </div>
  )
}

export default WelcomeSection
