import { useState } from "react";

export const useRegister = () => {
  const initialRegisterData = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };
  const [registerData, setRegisterData] = useState(initialRegisterData);

  const handleChangeRegisterData = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegisterData = async () => {
    const { firstName, lastName, username, email, password } = registerData;
    const res = await fetch(`/api/v1/auth/register`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, username, email, password }),
    });
    const { message, errorMessage } = await res.json();

    if (errorMessage) {
      alert(errorMessage);
    }

    console.log(message);
  };

  return { registerData, handleChangeRegisterData, handleSubmitRegisterData };
};
