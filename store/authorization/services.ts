import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserLoginDTO } from 'models/user.dto';

import { setTokens } from './token.services';

export const AuthorizationServices = {
  login: createAsyncThunk<void, UserLoginDTO>(
    'authorization/login',
    async (values, { rejectWithValue }) => {
      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        return response.json().then((json) => {
          setTokens(json.accessToken);
        });
      } catch (error) {
        rejectWithValue(error);
      }
    },
  ),
};
