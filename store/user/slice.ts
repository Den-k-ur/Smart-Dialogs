import { createSlice } from '@reduxjs/toolkit';

import { UserServices } from './services';

import { UserState } from './types';

const initialState: UserState = {
  error: null,
  firstName: null,
  lastName: null,
  hasError: false,
  isLoading: false,
  isSuccess: false,
};

const { userName } = UserServices;

const setDefaultValuesPending = (state: UserState) => {
  state.isLoading = true;
  state.hasError = false;
  state.error = '';
  state.isSuccess = false;
};

const setDefaultValuesFilfilled = (state: UserState) => {
  state.isLoading = false;
  state.hasError = false;
  state.error = '';
  state.isSuccess = true;
};

const setDefaultValuesRejected = (state: UserState, error = '') => {
  state.isLoading = false;
  state.hasError = true;
  state.error = error;
  state.isSuccess = false;
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userName.pending, (state) => {
      setDefaultValuesPending(state);
    });

    builder.addCase(userName.fulfilled, (state, { payload }) => {
      setDefaultValuesFilfilled(state);
      state.firstName = payload?.firstName;
      state.lastName = payload?.lastName;
    });

    builder.addCase(userName.rejected, (state, action) => {
      setDefaultValuesRejected(state, action.payload as string);
    });
  },
});
