// src/components/App.jsx

import HomePage from 'pages/HomePage/HomePage';
import SignInPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import TrackerPage from 'pages/TrackerPage/TrackerPage';
import UserSettingsModalT from 'pages/UserSettingsModal/UserSettingModalT';
import ConfirmGoogleAuth from 'pages/ConfirmGoogleAuth/ConfirmGoogleAuth';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/tracker" element={<TrackerPage />} />
      <Route path="/userSetting" element={<UserSettingsModalT />} />
      <Route path="/waterform" element={<UserSettingsModalT />} />
      <Route path="/confirm-google-auth" element={<ConfirmGoogleAuth />} />
    </Routes>
  );
};
