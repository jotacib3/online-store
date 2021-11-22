import api, { EndPoints } from '../api/axios';

export async function getProducts() {
  return await api.get(EndPoints.products);
}

export async function getProductById(productId) {
  return await api.get(
    `${EndPoints.products}/${productId}?_expand=categories&_expand=departments`,
  );
}

export async function postProduct(product) {
  return await api.post(EndPoints.products, product);
}

export async function putProduct(product) {
  return await api.put(`${EndPoints.products}/${product.id}`, product);
}

export async function deleteProductById(productId) {
  return await api.delete(`${EndPoints.products}/${productId}`);
}
