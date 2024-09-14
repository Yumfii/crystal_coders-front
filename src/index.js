import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-homework-template">

      <App />
    </BrowserRouter>
  </React.StrictMode>
);
