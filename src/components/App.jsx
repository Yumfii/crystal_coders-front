import HomePage from 'pages/HomePage/HomePage';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
   <Routes>
      <Route path="/"  element = {<HomePage/>}/>


    </Routes>


  );
};
