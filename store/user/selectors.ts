import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const root = (store: RootState) => store.user;

export const isLoading = createSelector(root, (data) => data.isLoading);

export const error = createSelector(root, (data) => data.error);

export const hasError = createSelector(root, (data) => data.hasError);

export const isSuccess = createSelector(root, (data) => data.isSuccess);

export const firstName = createSelector(root, (data) => data.firstName);
export const lastName = createSelector(root, (data) => data.lastName);

export const FullName = createSelector(
  firstName,
  lastName,
  (userFirstName, userLastName) => `${userFirstName} ${userLastName && userLastName[0]}.`,
);
