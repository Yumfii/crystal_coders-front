<<<<<<< Updated upstream
import React from 'react'
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm'
import CSS from './UserSettingsModal.module.css'

const UserSettingsModal = () => {
    return (

      <div className={CSS.modalContainer}>
        <h2 className={CSS.settingsHeader}>Settings</h2>

        <UserSettingsForm/>
    </div>
  )
}

export default UserSettingsModal
=======
import React, { useEffect } from 'react';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import CSS from './UserSettingsModal.module.css';
import { useTour } from '@reactour/tour';
import { stepsModal } from 'components/stepsModal';



const UserSettingsModal = () => {
  const { setIsOpen, setSteps, close } = useTour();

  useEffect(() => {
    setSteps(stepsModal);
    const hasSeenModalTour = localStorage.getItem('hasSeenModalTour');
    if (!hasSeenModalTour) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [setIsOpen, setSteps]);

  const handleTourComplete = () => {
    localStorage.setItem('hasSeenModalTour', 'true');
    close();
  };

  return (
    <div className={CSS.modalContainer}>
      <h2 className={CSS.settingsHeader}>Settings</h2>
      <UserSettingsForm  onTourComplete={handleTourComplete}/>
    </div>
  );
};

export default UserSettingsModal;
>>>>>>> Stashed changes
