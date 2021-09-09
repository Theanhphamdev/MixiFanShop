import {AxiosClient} from "./AxiosClient";

export const getAll = () => {
  const url = `/products`;
  return AxiosClient.get(url);
}
export const edit = (item) => {
  const url = `/products/${item.id}`;
  return AxiosClient.put(url, item);
};
export const get = (id) => {
  const url = `/products/${id}`;
  return AxiosClient.get(url);
};
export const remove = (id) => {
  const url = `/products/${id}`;
  return AxiosClient.delete(url);
};
export const add = (product) => {
  const url = `/products`;
  return AxiosClient.post(url, product);
};
export const getProductByCateId = (id) => {
  const url = `/products?category=${id}`;
  return AxiosClient.get(url);
};
export const getProductSearch = (keywd) => {
  const url = `/products?q=${keywd}`;
  return AxiosClient.get(url);
};
export const getProductFilterDown = (fillDown) => {
  const url = `/products?_sort=${fillDown}&_order=asc`;
  return AxiosClient.get(url);
};
export const getProductFilterUp = (fillUp) => {
  const url = `/products?_sort=${fillUp}&_order=desc`;
  return AxiosClient.get(url);
};
export const getProductLimit = (limitPage) => {
  const url = `/products?_page=${limitPage}&_limit=4`;
  return AxiosClient.get(url);
};