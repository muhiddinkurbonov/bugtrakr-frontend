import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../services/auth";
import { RegisterPage } from "../pages/RegisterPage";
const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await auth.register(userData.name, userData.email, userData.password);
      console.log(response.data);
      // Redirect to login page after successful registration
      navigate("/api/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <RegisterPage userData={userData} handleChange={handleChange} handleSubmit={handleSubmit}/>
  );
};

export default Register;
