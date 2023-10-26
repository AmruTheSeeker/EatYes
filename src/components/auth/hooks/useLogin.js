import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
  const initialLoginData = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);

  const handleChangeLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLoginData = async () => {
    toast.loading("Logging in...");
    const { email, password } = loginData;
    const res = await fetch(`/api/v1/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const { token, data } = await res.json();
    toast.remove();
    Cookies.set("eatyes-token", JSON.stringify(token));
    Cookies.set("eatyes-data", JSON.stringify(data));
    toast.success("Logged in successfully!");

    // if (errorMessage) {
    //   alert(errorMessage);
    // }

    // console.log(token);
    router.push("/dashboard/user");
  };

  return { loginData, handleChangeLoginData, handleSubmitLoginData };
};
