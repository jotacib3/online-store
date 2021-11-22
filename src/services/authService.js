import api, { EndPoints } from '../api/axios';

export async function login(userLogin) {
  return await api.post(EndPoints.login, userLogin);
}

export async function register(userRegister) {
  return await api.post(EndPoints.register, userRegister);
}

export async function changePassword(changePasswordModel) {
  return await api.put(
    `${EndPoints.users}/${changePasswordModel.id}`,
    changePasswordModel,
  );
}
