import React, { useEffect } from 'react';
import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from 'components/WaterMainInfo/WaterMainInfo';
import AddWaterBtn from 'components/AddWaterBtn/AddWaterBtn';
import css from './TrackerPage.module.css';
import { useTour } from '@reactour/tour';
import { steps } from 'components/steps';

const TrackerPage = () => {
  const { setIsOpen, setSteps } = useTour();

  useEffect(() => {

    setSteps(steps);
    const hasSeenTrackerTour = localStorage.getItem('hasSeenTrackerTour');
    if (!hasSeenTrackerTour) {
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    }


    return () => {

      localStorage.removeItem('hasSeenTrackerTour');
    };
  }, [setIsOpen, setSteps]);

  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
      <AddWaterBtn variant="primary" />
    </div>
  );
};

export default TrackerPage;
