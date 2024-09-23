import React, { useEffect } from 'react';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import AddWaterBtn from '../../components/AddWaterBtn/AddWaterBtn';
import css from './TrackerPage.module.css';
import { useTour } from '@reactour/tour';
import { steps } from '../../components/steps';
import { selectUser } from '../../redux/auth/selectors.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';

const TrackerPage = () => {
  const selector = useSelector(selectUser);
  const navigate = useNavigate();
  const { setIsOpen, setSteps} = useTour();

  useEffect(() => {
    if (!selector.email) {
      navigate('/');
    }
  }, [selector, navigate]);

  const handleStartTour = () => {
    setSteps(steps);
    setIsOpen(true);
  };

  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
      <AddWaterBtn variant="primary" onTourComplete={handleTourComplete} />
      <button onClick={handleStartTour}>Learn how to use the tracker</button>
    </div>
  );
};

export default TrackerPage;
