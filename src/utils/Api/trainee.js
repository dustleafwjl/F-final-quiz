import http from '../Http';

export const getAllStudentWithNotGrouped = () => {
  return http.get('/trainees?grouped=false');
};

export const createStudentAndGet = (student) => {
  return http.post('/trainees', student);
};

export const deleteTraineeById = (id) => {
  return http.delete(`/trainees/${id}`);
};
