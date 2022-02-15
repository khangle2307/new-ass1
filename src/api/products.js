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
    return instance.get(url, product);
};

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.get(url, id);
};

export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.get(url, product);
};