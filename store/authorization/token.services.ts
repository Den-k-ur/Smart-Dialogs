export const getLocalRefreshToken = () => localStorage.getItem('refresh');

export const getLocalAccessToken = () => localStorage.getItem('token');

export const updateLocalAccessToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const setTokens = (token: string) => {
  localStorage.setItem('token', token);
};

export const removeTokens = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh');
};
