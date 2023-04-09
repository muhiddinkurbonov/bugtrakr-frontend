import axios from "axios";
import Cookies from "js-cookie";
const API_BASE_URL = process.env.REACT_APP_API_ENDPOINT;

axios.defaults.baseURL = API_BASE_URL;

const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    const { accessToken } = response.data;
    // set token in cookie
    if (accessToken) {
      Cookies.set("token", accessToken);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const logout = () => {
  // remove token from cookie
  // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:000:00 UTC; path=/;";
  Cookies.remove("token", { path: "/" });
};

const isAuthenticated = () => {
  const token = Cookies.get("token");
  return token !== "" && token !== null && token !== undefined;
};

const auth = { register, login, logout, isAuthenticated };
export default auth;
