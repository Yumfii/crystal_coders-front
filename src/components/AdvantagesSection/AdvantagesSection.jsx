import css from "./AdvantagesSection.module.css";

const AdvantatgesSection = () => {
  return (
    <div className={css.advantages}>
      <div className={css.customersContainer}>
        <ul className={css.customersList}>
          <li className={css.customersImg}>
            <img src="" alt="customer1" />
          </li>
          <li className={css.customersImg}>
            <img src="" alt="customer2" />
          </li>
          <li className={css.customersImg}>
            <img src="" alt="customer3" />
          </li>
        </ul>

        <p className={css.customersText}>
          Our <span className={css.happy}>happy</span> customers
        </p>
      </div>
      <div className={css.benefits}>
      <div className={css.habitContainer}>
        <div className={css.circle}></div>
        <p className={css.habitText}>Habit drive</p>
        </div>
      <div className={css.statistics}><p className={css.statisticsText}>View statistics</p></div>
      <div className={css.setting}>
        <p className={css.settingText}></p>
      </div>
      </div>
    </div>
  );
};

export default AdvantatgesSection;
