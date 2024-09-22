import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const verifyEmail = async () => {
      try {
        const response = await axios.post('/auth/verify-email', {token:token});

        if (response.status === 200) {
          toast.success('Email verified successfully!');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } catch (error) {
        toast.error('Verification failed. Please try again.');
        console.error(error);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Verifying your email...</h1>
    </div>
  );
};

export default VerifyEmailPage;
