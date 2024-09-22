import React, { useEffect } from 'react';
import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from 'components/WaterMainInfo/WaterMainInfo';
import AddWaterBtn from 'components/AddWaterBtn/AddWaterBtn';
import css from './TrackerPage.module.css';
import { useTour } from '@reactour/tour';

const TrackerPage = () => {
  const { setIsOpen } = useTour();


  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTrackerTour');
    if (!hasSeenTour) {
      setTimeout(() => {
        setIsOpen(true);
      }, 500); 
    }
  }, [setIsOpen]);

  // const closeTour = () => {
  //   setIsOpen(false);
  //   localStorage.setItem('hasSeenTrackerTour', 'true');
  // };

  return (
    <div className={css.container}>
      <WaterMainInfo />
      <WaterDetailedInfo />
      <AddWaterBtn variant="primary" />
    </div>
  );
};

export default TrackerPage;
