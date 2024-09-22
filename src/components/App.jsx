// src/components/App.jsx

import HomePage from 'pages/HomePage/HomePage';
import SignInPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import TrackerPage from 'pages/TrackerPage/TrackerPage';
import UserSettingsModalT from 'pages/UserSettingsModal/UserSettingModalT';
import ConfirmGoogleAuth from 'pages/ConfirmGoogleAuth/ConfirmGoogleAuth';
import ForgotPasswordPage from 'pages/ForgotPassword/ForgotPassword';
import ResetPasswordPage from 'pages/ResetPassword/ResetPassword';
import GraphPage from 'pages/GraphPage/GraphPage';
import UserSettingsModal from './UserSettingsModal/UserSettingsModal';
import VerifyEmailPage from 'pages/VerifyEmailPage/VerifyEmailPage.jsx';

// import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


export const App = () => {
  // useEffect(() => {}, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/tracker" element={<TrackerPage />} />
      <Route path="/userSetting" element={<UserSettingsModalT />} />
      <Route path="/waterform" element={<UserSettingsModalT />} />
      <Route path="/confirm-google-auth" element={<ConfirmGoogleAuth />} />
      <Route path="/water-graph" element={<GraphPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage/>}/>

      <Route path="/settings" element={<UserSettingsModal />} />
    </Routes>
    <Toaster/>
    </>
  );
};
