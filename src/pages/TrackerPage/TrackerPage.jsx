import React, { useEffect } from 'react';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import AddWaterBtn from '../../components/AddWaterBtn/AddWaterBtn';
import css from './TrackerPage.module.css';
import { useTour } from '@reactour/tour';
import { steps } from '../../components/steps';
import { selectUser } from '../../redux/auth/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser, getUserById } from '../../redux/auth/operations.js';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';

const TrackerPage = () => {
  const selector = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setIsOpen, setSteps} = useTour();

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
