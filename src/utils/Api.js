import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080',
});
// axios.baseURL = "http://localhost:8080"

export const getAllStudent = () => {
  return http.get('/trainees');
};

export const createStudentAndGet = (student) => {
  return http.post('/trainees', student);
};

export const divideStudent = () => {
  return http.patch('/students/divided');
};

export const getAllGroups = () => {
  return http.get('/groups');
};

export const reNameGroup = (name, rename) => {
  return http.patch(`/groups/${name}/rename?text=${rename}`);
};
