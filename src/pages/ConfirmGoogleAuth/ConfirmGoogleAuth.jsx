import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConfirmGoogleAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await axios.post('https://crystal-coders-back.onrender.com/auth/confirm-oauth', { code });
          if (response.status === 200) {
            navigate('/tracker');
          }
        } catch (error) {
          console.error('Ошибка при подтверждении Google OAuth:', error);
        }
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default ConfirmGoogleAuth;
