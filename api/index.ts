import axios, { InternalAxiosRequestConfig } from 'axios';

import { tokenServices } from 'store/authorization';

const refresh_URL = 'http://localhost:3002/refresh-token';
const api = axios.create({
  baseURL: 'http://localhost:3002/',
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = tokenServices.getLocalAccessToken();

  if (config.headers && token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (!originalConfig.url.includes('auth/') && err.response) {
      if (
        err.response.status === 401 &&
        !originalConfig.retry &&
        originalConfig.url !== refresh_URL
      ) {
        originalConfig.retry = true;
        try {
          const response = await api.post(refresh_URL, {
            refresh_token: tokenServices.getLocalRefreshToken(),
          });
          const { access_token } = response.data;
          tokenServices.updateLocalAccessToken(access_token);

          return api(originalConfig);
        } catch (_error) {
          tokenServices.removeTokens();
          location.reload();

          return Promise.reject(_error);
        }
      }
    }

    if (originalConfig.retry || originalConfig.url === refresh_URL) {
      tokenServices.removeTokens();
    }

    return Promise.reject(err);
  },
);

export default api;