import http from '../Http';

export const divideStudent = () => {
  return http.patch('/students/divided');
};

export const getAllGroups = () => {
  return http.get('/groups');
};

export const reNameGroup = (name, rename) => {
  return http.patch(`/groups/${name}/rename?text=${rename}`);
};
