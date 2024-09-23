import React, { useEffect } from 'react';
import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from 'components/WaterMainInfo/WaterMainInfo';
import AddWaterBtn from 'components/AddWaterBtn/AddWaterBtn';
import css from './TrackerPage.module.css';
import { useTour }, { useEffect } from '@reactour/tour';
import { steps } from 'components/steps';
import { selectUser } from '../../redux/auth/selectors.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TrackerPage = () => {
  const selector = useSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(selector.email);
    if (!selector.email) {
      navigate('/');
    }
  }, [selector, navigate]);
  const { setIsOpen, setSteps, close } = useTour();

  useEffect(() => {
    setSteps(steps);
    const hasSeenTrackerTour = localStorage.getItem('hasSeenTrackerTour');
    if (!hasSeenTrackerTour) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [setIsOpen, setSteps]);

  const handleTourComplete = () => {
    localStorage.setItem('hasSeenTrackerTour', 'true');
    close();
  };

  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
      <AddWaterBtn variant="primary" onTourComplete={handleTourComplete} />
    </div>
  );
};

export default TrackerPage;
