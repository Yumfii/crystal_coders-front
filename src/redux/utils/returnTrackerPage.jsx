import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getUserById } from '../auth/operations.js';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../auth/selectors.js';

export const useRestoreSession = () => {
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

        // console.log(window.location.pathname);
        if (user) {
          navigate('/tracker');
        }
      }
    } catch (error) {
      console.log('Error restoring session:', error);
    }
  };

  return restoreSession;
};
