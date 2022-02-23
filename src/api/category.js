import instance from "./config";

export const getAll = () => {
    const url = "/categorys";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/categorys/${id}`;
    return instance.get(url, id);
};

export const add = (category) => {
    const url = "/categorys";
    return instance.post(url, category);
};

export const remove = (id) => {
    const url = `/categorys/${id}`;
    return instance.delete(url, id);
};

export const update = (category) => {
    const url = `/categorys/${category.id}`;
    return instance.put(url, category);
};