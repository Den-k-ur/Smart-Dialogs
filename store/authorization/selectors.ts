import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const root = (store: RootState) => store.authorization;

export const isLoading = createSelector(root, (data) => data.isLoading);

export const error = createSelector(root, (data) => data.error);

export const hasError = createSelector(root, (data) => data.hasError);

export const isSuccess = createSelector(root, (data) => data.isSuccess);

export const isAuth = createSelector(root, (data) => data.isAuth);

export const user = createSelector(root, (data) => data.user);

export const firstName = createSelector(user, (data) => data.firstName);
export const lastName = createSelector(user, (data) => data.lastName);
