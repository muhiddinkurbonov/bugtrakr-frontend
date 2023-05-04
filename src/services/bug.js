import axios from "axios";
import Cookies from "js-cookie";
const API_BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export const addBug = async (bug) => {
  const token = Cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(`${API_BASE_URL}/bugs`, bug, config);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const getBugs = async () => {
  const token = Cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(`${API_BASE_URL}/bugs`, config);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
