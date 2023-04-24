import { createAsyncThunk } from '@reduxjs/toolkit';

import api from 'api';
import { UserDTO } from 'models/user.dto';

export const UserServices = {
  userName: createAsyncThunk<UserDTO, string>(
    'authorization/user',
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.get('http://localhost:3002/user');

        return response.data;
      } catch (error) {
        rejectWithValue(error);
      }
    },
  ),
};
