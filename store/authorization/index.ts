import { AuthorizationSlice } from './slice';

export * as tokenServices from './token.services';
export * as authorizationSelectors from './selectors';
export { AuthorizationServices } from './services';
export const authorizationSlice = AuthorizationSlice.reducer;
export const authorizationActions = AuthorizationSlice.actions;
