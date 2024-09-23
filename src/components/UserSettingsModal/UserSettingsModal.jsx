import React, { useEffect } from 'react';
import UserSettingsForm from '../UserSettingsForm/UserSettingsForm';
import CSS from './UserSettingsModal.module.css';
import { useTour } from '@reactour/tour';
import { stepsModal } from '../stepsModal';

const UserSettingsModal = () => {
  const { setIsOpen, setSteps } = useTour();

  const handleStartTour = () => {
    setSteps(stepsModal);
    setIsOpen(true);
  };

  return (
    <div className={CSS.modalContainer}>
      <h2 className={CSS.settingsHeader}>Settings</h2>
      <UserSettingsForm onTourComplete={handleTourComplete} />
      <button onClick={handleStartTour}>How to change settings</button>
    </div>
  );
};

export default UserSettingsModal;
