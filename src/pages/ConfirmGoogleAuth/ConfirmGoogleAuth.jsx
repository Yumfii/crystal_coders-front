import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ConfirmGoogleAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const authCode = queryParams.get('code');
    console.log(authCode);


    if (authCode) {
      axios.post('https://crystal-coders-back.onrender.com/auth/confirm-oauth', { code: authCode })
        .then(() => {
          navigate('/react-homework-template/tracker');
        })
        .catch((error) => {
          console.error('Error during OAuth confirmation:', error);
        });
    } else {
      console.error('No authorization code found');
    }
  }, [location.search, navigate]);

  return <div>Processing...</div>;
};

export default ConfirmGoogleAuth;
