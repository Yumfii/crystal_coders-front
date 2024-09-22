import { useTranslation } from 'react-i18next';
import css from './TranslationMenu.module.css';

const TranslationMenu = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={css.headerContainer}>
      <button
        type="button"
        className={`${css.languages} ${
          i18n.language === 'EN' ? css.activeLanguage : ''
        }`}
        onClick={() => changeLanguage('EN')}
      >
        EN
      </button>
      <button
        type="button"
        className={`${css.languages} ${
          i18n.language === 'UK' ? css.activeLanguage : ''
        }`}
        onClick={() => changeLanguage('UK')}
      >
        UK
      </button>
    </div>
  );
};
export default TranslationMenu;
