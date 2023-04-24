import { UserSlice } from './slice';

export * as userSelectors from './selectors';
export { UserServices } from './services';
export const userSlice = UserSlice.reducer;
export const userActions = UserSlice.actions;
