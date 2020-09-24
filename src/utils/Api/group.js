import http from '../Http';

export const createdGroups = () => {
  return http.post('/groups');
};

export const getAllGroups = () => {
  return http.get('/groups');
};

export const changeNameGroup = (id, rename) => {
  return http.patch(`/groups/${id}/rename?text=${rename}`);
};
