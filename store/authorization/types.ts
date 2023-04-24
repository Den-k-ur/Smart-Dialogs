export type AuthorizationState = {
  hasError: boolean;
  error: string | null;
  isSuccess: boolean;
  isLoading: boolean;
  isAuth: boolean;
  user: {
    firstName: string | null;
    lastName: string | null;
  };
};
