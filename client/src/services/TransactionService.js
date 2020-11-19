import http from '../http-common';

const getYearMonth = () => {
  return http.get('/api/transaction/findYearMonth');
};

const getFromPeriod = (period) => {
  const url = `/api/transaction?period=${period.toString()}`;
  return http.get(url);
};

const remove = (id) => {
  return http.delete(`/api/transaction/${id}`);
};

const create = (data) => {
  return http.post('/api/transaction/', data);
};

const update = (id, data) => {
  return http.put(`/api/transaction/${id}`, data);
};

export default {
  getYearMonth,
  getFromPeriod,
  create,
  update,
  remove,
};
