// src/components/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import SignInPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import TrackerPage from 'pages/TrackerPage/TrackerPage';
import ConfirmGoogleAuth from 'pages/ConfirmGoogleAuth/ConfirmGoogleAuth';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/tracker" element={<TrackerPage />} />
      <Route path="/confirm-google-auth" element={<ConfirmGoogleAuth />} />
    </Routes>
  );
};
