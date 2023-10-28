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
    const { email, password } = loginData;
    if (!email || !password) {
      toast.error("fill email and password");
      return;
    }
    toast.loading("Logging in...");

    const res = await fetch(`/api/v1/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const { token, data, error } = await res.json();
    toast.remove();

    if (error) {
      toast.error(error);
      return;
    }
    Cookies.set("eatyes-token", JSON.stringify(token));
    Cookies.set("eatyes-data", JSON.stringify(data));
    toast.success("Logged in successfully!");

    router.push("/dashboard/user");
  };

  return { loginData, handleChangeLoginData, handleSubmitLoginData };
};
