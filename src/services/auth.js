import axios from 'axios';

export async function signUp(body) {
  const response = await axios.post(
    'https://crystal-coders-back.onrender.com/auth/register',
    body
  );

  return response;
}

export async function signIn(body) {
  const response = await axios.post(
    'https://crystal-coders-back.onrender.com/login',
    body
  );

  return response;
}
