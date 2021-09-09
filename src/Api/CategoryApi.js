import {AxiosClient} from "./AxiosClient";

export const getAllCate = () => {
  const url = `/categories`;
  return AxiosClient.get(url);
}
export const editCate = (item) => {
  const url = `/categories/${item.id}`;
  return AxiosClient.put(url, item);
};
export const getCate = (id) => {
  const url = `/categories/${id}`;
  return AxiosClient.get(url);
};
export const removeCate = (id) => {
  const url = `/categories/${id}`;
  return AxiosClient.delete(url);
};
export const addCate = (category) => {
  const url = `/categories`;
  return AxiosClient.post(url, category);
};
