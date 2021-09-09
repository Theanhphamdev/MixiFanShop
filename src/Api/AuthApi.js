import {AxiosClient} from "./AxiosClient";

export const signup = (user) => {
    console.log(user);
    const url = `/signup`;
    return AxiosClient.post(url, user);
};
export const signin = (user) => {
    const url = `/signin`;
    return AxiosClient.post(url, user);
};
