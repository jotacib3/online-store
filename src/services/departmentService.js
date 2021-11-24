import api, { EndPoints } from '../api/axios';

export async function getDepartments() {
  return await api.get(EndPoints.departments);
}

export async function postDepartment(department) {
  return await api.post(EndPoints.departments, department);
}

export async function putDepartment(department) {
  return await api.put(`${EndPoints.departments}/${department.id}`, department);
}

export async function deleteDepartmentById(id) {
  return await api.delete(`${EndPoints.departments}/${id}`);
}
