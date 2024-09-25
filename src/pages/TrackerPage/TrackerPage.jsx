import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Ensure you import these hooks
import { useNavigate } from 'react-router-dom';
import { useTour } from '@reactour/tour';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import { fetchUser, getUserById } from '../../redux/auth/operations'; // Import necessary actions
import { selectUser } from '../../redux/auth/selectors'; // Ensure you import your selector
import { steps } from '../../components/steps';
import css from './TrackerPage.module.css';

const TrackerPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector(selectUser);

  const { setIsOpen, setSteps } = useTour();
  const [waterConsumption, setWaterConsumption] = useState(null);

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
        console.error('Error restoring session:', error);
        if (!selector.email) {
          navigate('/');
        }
      }
    };

    restoreSession();
  }, [dispatch, navigate, selector.email]);

  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
