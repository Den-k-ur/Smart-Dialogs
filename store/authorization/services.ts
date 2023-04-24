import { createAsyncThunk } from '@reduxjs/toolkit';

import api from 'api';
import { UserLoginDTO } from 'models/user.dto';

import { tokenServices } from '.';

export const AuthorizationServices = {
  login: createAsyncThunk<void, UserLoginDTO>(
    'authorization/login',
    async (values, { rejectWithValue }) => {
      try {
        const response = await api.post('http://localhost:3002/auth/login', values);
        tokenServices.setTokens(response.data.access_token, response.data.refresh_token);
      } catch (error) {
        rejectWithValue(error);
      }
    },
  ),
};
