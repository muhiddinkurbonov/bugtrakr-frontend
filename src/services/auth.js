import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_ENDPOINT + "/auth";

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

const register = async (name, email, password) => {
  try {
    const response = await axios.post("/register", { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post('/login', {email, password});
    const {accessToken} = response.data;
    // set token in cookie
    if(accessToken) {
      document.cookie = `token=${accessToken}; path=/`;
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

const logout = () => {
  // remove token from cookie
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:000:00 UTC; path=/;";
}

export default {register, login, logout};