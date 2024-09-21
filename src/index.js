import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { App } from 'components/App';
import { TourProvider } from '@reactour/tour';

const steps = [
  {
    selector: '.dailyNorma',
    content: 'This is your daily norma for water intake',
    position: 'right',
  },
  {
    selector: '.waterProgressBar',
    content: 'This is how much water you have had today',
    position: 'right',
  },
  {
    selector: '.addWaterBtnMainInfo',
    content: 'Here you can add water',
    position: 'left',
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <TourProvider steps={steps}>
          <App />
        </TourProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
