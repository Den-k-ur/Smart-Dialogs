import { createSlice } from '@reduxjs/toolkit';

import { AuthorizationServices } from './services';

import { AuthorizationState } from './types';

const initialState: AuthorizationState = {
  hasError: false,
  isAuth: false,
  error: null,
  isLoading: false,
  isSuccess: false,
  user: {
    firstName: null,
    lastName: null,
  },
};

const { login } = AuthorizationServices;

const setDefaultValuesPending = (state: AuthorizationState) => {
  state.isLoading = true;
  state.hasError = false;
  state.error = '';
  state.isSuccess = false;
};

const setDefaultValuesFilfilled = (state: AuthorizationState) => {
  state.isLoading = false;
  state.hasError = false;
  state.error = '';
  state.isSuccess = true;
};

const setDefaultValuesRejected = (state: AuthorizationState, error = '') => {
  state.isLoading = false;
  state.hasError = true;
  state.error = error;
  state.isSuccess = false;
};

export const AuthorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      setDefaultValuesPending(state);
    });

    builder.addCase(login.fulfilled, (state) => {
      setDefaultValuesFilfilled(state);
      state.isAuth = true;
    });

    builder.addCase(login.rejected, (state, action) => {
      setDefaultValuesRejected(state, action.payload as string);
      state.isAuth = false;
    });
  },
});
