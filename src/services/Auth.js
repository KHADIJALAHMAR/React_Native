import axios from "axios";
import APP_URL from "./URL";

export const Createuser = async (
    username,
    email,
    password,
    repeated_password,
    role
) => {
    try {
    const response = await axios.post(`${APP_URL}/auth/register`, {
        username,
        email,
        password,
        repeated_password,
        role,
    });
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
