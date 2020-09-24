import http from '../Http';

export const createTrainerAndGet = (trainer) => {
  return http.post('/trainers', trainer);
};

export const getAllTrainerWithNotGrouped = () => {
  return http.get('/trainers?grouped=false');
};

export const deleteTrainerById = (id) => {
  return http.delete(`/trainers/${id}`);
};
