import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useRegister = () => {
  const router = useRouter();
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
    toast.loading("Regitered data...");
    const { firstName, lastName, username, email, password } = registerData;
    const res = await fetch(`/api/v1/auth/register`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, username, email, password }),
    });
    const { message, errorMessage } = await res.json();
    toast.remove();

    if (errorMessage) {
      alert(errorMessage);
    }
    toast.success("Registered complete, please login");

    router.push("/login");
  };

  return { registerData, handleChangeRegisterData, handleSubmitRegisterData };
};
