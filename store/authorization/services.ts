import { createAsyncThunk } from '@reduxjs/toolkit';

import api from 'api';
import { UserDTO, UserLoginDTO } from 'models/user.dto';

import { tokenServices } from '.';

export const AuthorizationServices = {
  login: createAsyncThunk<UserDTO, UserLoginDTO>(
    'authorization/login',
    async (values, { rejectWithValue }) => {
      try {
        const response = await api.post('http://localhost:3002/auth/login', values);
        tokenServices.setTokens(response.data.access_token, response.data.refresh_token);

        return response.data;
      } catch (error) {
        rejectWithValue(error);
      }
    },
  ),
};
