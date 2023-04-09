import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.REACT_APP_API_ENDPOINT;


const getUser = async () => {
  const token = Cookies.get("token");
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  };

  try {
    const response = await axios.get(`${API_URL}/user`, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getUser;
