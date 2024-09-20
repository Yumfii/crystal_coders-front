import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmGoogleAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code);

    if (code) {
      axios.post('https://crystal-coders-back.onrender.com/auth/confirm-oauth', {
        code: code
      })
      .then(() => {
        navigate('/tracker');
      })
      .catch(error => {
        console.error("Error during Google OAuth callback:", error);
      });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Authenticating...</h1>
    </div>
  );
};

export default ConfirmGoogleAuth;
