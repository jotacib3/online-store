import api, { EndPoints } from '../api/axios';

export async function getUser(id) {
  return await api.get(`${EndPoints.users}/${id}`);
}

export async function putUser(user) {
  return await api.put(`${EndPoints.users}/${user.id}`, user);
}
