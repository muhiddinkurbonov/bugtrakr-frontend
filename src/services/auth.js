import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_ENDPOINT + "/auth";

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

const register = async (name, email, password) => {
  try {
    const response = await axios.post("/regsiter", { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
