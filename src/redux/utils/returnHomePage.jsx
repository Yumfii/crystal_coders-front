import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUserById } from '../auth/operations.js';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../auth/selectors.js';
import { use } from 'i18next';

export const useRestoreHome = () => {
  const dispatch = useDispatch();
  const selector = useSelector(selectUser);
  const navigate = useNavigate();

  const restoreSession = async () => {
    try {
      const session = await dispatch(fetchUser()).unwrap();

      if (session) {
        const user = await dispatch(
          getUserById({
            userId: session.data.userId,
            accessToken: session.data.accessToken,
          })
        ).unwrap();

        window.setTimeout(() => {
          console.log(user);
          if (user) {
            if (window.location.pathname === '/tracker') {
              return;
            }
            // console.log(selector);
          } else {
            navigate('/');
          }
        }, 150);
      }
    } catch (error) {
      navigate('/');
      console.log('Error restoring session:', error);
    }
  };

  return restoreSession;
};
