import instance from "./config";

export const getAll = () => {
    const url = "/cates";
    return instance.get(url);
};

export const get = (id) => {
    const url = `/cates/${id}`;
    return instance.get(url, id);
};

export const add = (cate) => {
    const url = "/cates";
    return instance.post(url, cate);
};

export const remove = (id) => {
    const url = `/cates/${id}`;
    return instance.delete(url, id);
};

export const update = (cate) => {
    const url = `/cates/${cate.id}`;
    return instance.put(url, cate);
};

export const GetProduct = () => {
    const url = "/cates?_embed=products";
    return instance.get(url);
};