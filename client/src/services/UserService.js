import http from '../http-common';

const create = (data) => {
  return http.post('/api/user/create', data);
};

const login = (login, password) => {
  return http.get(`/api/user/login?login=${login}&password=${password}`);
};

export default {
  create,
  login,
};
