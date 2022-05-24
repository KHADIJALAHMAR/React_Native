import axios from "axios";
import APP_URL from "./URL";

export const Createuser = async (
    user
) => {
    try {
    const response = await axios.post(`${APP_URL}/auth/register`, user);
    return response.data;
    } catch (error) {
    return console.log({ error:error.message });
    }
};
    
export function login(email, password) {
    return axios.post(`${APP_URL}/auth/login`, {
        email: email,
        password: password,
    });
    }
