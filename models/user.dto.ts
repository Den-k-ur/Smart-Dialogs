export type UserLoginDTO = {
  email: string;
  password: string;
};

export type ResponseUserLoginDTO = {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
};
