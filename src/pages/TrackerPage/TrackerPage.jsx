import WaterDetailedInfo from 'components/WaterDetailedInfo/WaterDetailedInfo';
import WaterMainInfo from 'components/WaterMainInfo/WaterMainInfo';
import css from './TrackerPage.module.css';
import React, { useEffect, useState } from 'react';
import Tour from '@reactour/tour';

const TrackerPage = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);
const steps = [
  {selector:'.dailyNorma',
    content: 'This is your daily norma for water intake',
    position:'right',

  },
  {selector: '.waterProgressBar',
    content:'This is how much water you have had today',
    position:'right',
  },

 { selector: 'styleBtn',
  content:'Here you can add water',
  position:'left',
 }
];

useEffect(() => {
  const hasSeenTour = localStorage.getItem('hasSeenTrackerTour');

  if (!hasSeenTour) {
    setIsTourOpen(true);
  }
}, []);

const closeTour = () => {
  setIsTourOpen(false);
  localStorage.setItem('hasSeenTrackerTour', 'true');
};

  return (
    <div className={css.container}>
        <Tour
        steps={steps}
        isOpen={isTourOpen}
        onClose={closeTour}
      />
      <WaterMainInfo />
      <WaterDetailedInfo />
    </div>
  );
};

export default TrackerPage;
