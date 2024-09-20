import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmGoogleAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      axios.post('https://crystal-coders-back.onrender.com/auth/confirm-oauth', { code })
        .then(response => {
          const accessToken = response.data.data.accessToken;
          localStorage.setItem('accessToken', accessToken);
          navigate('/tracker');
        })
        .catch(error => {
          console.error("Error during Google OAuth callback:", error);
        });
    }
  }, [navigate]);

};

export default ConfirmGoogleAuth;
