import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.notFoundPage}>
      <img className={css.notFoundImage} />
      <p className={css.notFoundText}>Oops! Page not found.</p>
      <p className={css.notFoundError}>404</p>
      <p className={css.notFoundLink}>
        Please go to{' '}
        <span className={css.notFoundSpan}>
          <Link to="/">Home page</Link>!{' '}
        </span>
      </p>
    </div>
  );
}
