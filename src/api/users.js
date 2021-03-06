import instance from "./config";

export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};

export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};

export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};