import React, { useEffect } from 'react';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import CSS from './UserSettingsModal.module.css';
import { useTour } from '@reactour/tour';
import { stepsModal } from 'components/stepsModal';

const UserSettingsModal = () => {
  const { setIsOpen, setSteps } = useTour();

  useEffect(() => {

    setSteps(stepsModal);

    const hasSeenModalTour = localStorage.getItem('hasSeenModalTour');
    if (!hasSeenModalTour) {
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    }


    return () => {
      localStorage.removeItem('hasSeenModalTour');
    };
  }, [setIsOpen, setSteps]);

  return (
    <div className={CSS.modalContainer}>
      <h2 className={CSS.settingsHeader}>Settings</h2>
      <UserSettingsForm />
    </div>
  );
};

export default UserSettingsModal;
