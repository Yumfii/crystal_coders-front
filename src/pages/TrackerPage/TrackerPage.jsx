import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import css from './TrackerPage.module.css';
import React, { useEffect } from 'react';
import { selectUser } from '../../redux/auth/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser, getUserById } from '../../redux/auth/operations.js';

const TrackerPage = () => {
  const selector = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const session = await dispatch(fetchUser()).unwrap();

        if (session) {
          await dispatch(
            getUserById({
              userId: session.data.userId,
              accessToken: session.data.accessToken,
            })
          ).unwrap();
        }
      } catch (error) {
        console.log(selector);
        if (!selector.email) {
          navigate('/');
        }
        console.error('Error restoring session:', error);
      }
    };

    restoreSession();
  }, [dispatch]);
  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
