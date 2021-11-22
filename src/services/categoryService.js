import api, { EndPoints } from '../api/axios';

export async function getCategories() {
  return await api.get(EndPoints.categories);
}

export async function getCategoryById(id) {
  return await api.get(`${EndPoints.categories}/${id}?_expand=departments`);
}

export async function postCategory(category) {
  return await api.post(EndPoints.categories, category);
}

export async function putCategory(category) {
  return await api.put(`${EndPoints.categories}/${category.id}`, category);
}

export async function deleteCategoryById(id) {
  return await api.delete(`${EndPoints.categories}/${id}`);
}
