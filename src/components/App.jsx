import TrackerPage from 'pages/TrackerPage/TrackerPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element = {<HomePage/>} />
    // </Routes>
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Routes>
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </div>
  );
};
