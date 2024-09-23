import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://crystal-coders-back.onrender.com/';
// axios.defaults.baseURL = 'http://localhost:3000/';

const setAuthHeader = token => {
  if (token) {
    // console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('authToken', token);
    console.log(
      'Authorization Header Set:',
      axios.defaults.headers.common.Authorization
    );
  }
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const signIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/login', credentials, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const accessToken = data.data.accessToken;
      setAuthHeader(accessToken);
      // console.log(data.data.accessToken);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/register', credentials, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const accessToken = data.data.accessToken;
      setAuthHeader(accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post(
      '/auth/logout',
      {},
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  console.log('qwe');
  try {
    const { data } = await axios.post(
      'auth/refresh',
      {},
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return data.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateUsersSettings = createAsyncThunk(
  'updateUser',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.patch(
        `users/${id}`,
        {},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// ==========================================================================

// export const fetchUser = async () => {
//   try {
//     const response = await fetch(
//       // 'https://crystal-coders-back.onrender.com/auth/refresh',
//       'http://localhost:3000/auth/refresh',
//       {
//         method: 'POST',
//         // headers: {
//         //   'Content-Type': 'application/json',
//         //   Authorization: 'Bearer ' + this.accessToken,
//         // },
//         headers: new Headers({
//           'Content-Type': 'application/json',
//         }),
//         credentials: 'include',
//       }
//     );
//     const { data } = await response.json();
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const getUserById = async (userId, accessToken) => {
//   try {
//     const response = await fetch(
//       // `https://crystal-coders-back.onrender.com/users/${userId}`,
//       `http://localhost:3000/users/${userId}`,
//       {
//         method: 'GET',
//         headers: new Headers({
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + accessToken,
//         }),
//         credentials: 'include',
//       }
//     );
//     const { data } = await response.json();
//     return data;
//   } catch (err) {
//     console.error(err);
//   }
// };

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(
        '/auth/refresh',
        {},
        { withCredentials: true }
      );
      // console.log(response.data.data.accessToken);
      setAuthHeader(response.data.data.accessToken);
      return response.data;
    } catch (err) {
      console.log(thunkAPI.getState());
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getUserById = createAsyncThunk(
  'auth/getUserById',
  async ({ userId, accessToken }, thunkAPI) => {
    try {
      const response = await axios.get(`/users/${userId}`, {
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        // },
        withCredentials: true,
      });

      return {
        data: response.data,
        accessToken,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
