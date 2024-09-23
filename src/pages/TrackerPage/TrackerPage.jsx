import React, { useEffect } from 'react';
import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from 'components/WaterMainInfo/WaterMainInfo';
import AddWaterBtn from 'components/AddWaterBtn/AddWaterBtn';
import css from './TrackerPage.module.css';
import { useTour } from '@reactour/tour';
import { steps } from 'components/steps';

const TrackerPage = () => {
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
