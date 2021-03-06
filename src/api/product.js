/* eslint-disable quotes */
import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
};

export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url, id);
};

export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product);
};

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url, id);
};

export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};

export const paginate = (page, limit) => {
    const url = `/products?_page=${page}&_limit=${limit}`;
    return instance.get(url);
};