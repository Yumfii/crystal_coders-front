import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

const TrackerPage = () => {
  const selector = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setIsOpen, setSteps} = useTour();
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
          const userId = session.data.userId;
          await fetchWaterConsumption(userId);
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
  const fetchWaterConsumption = async (userId) => {
    try {
      const response = await axios.get(
        `https://crystal-coders-back.onrender.com/waterTracking/consumption/month?month=4&userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`, // Make sure to include the token here
          },
        }
      );
      setWaterConsumption(response.data); // Save the data for further use
    } catch (error) {
      console.error('Error fetching water consumption:', error);
    }
  };
  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />



    </div>
  );
};

export default TrackerPage;
