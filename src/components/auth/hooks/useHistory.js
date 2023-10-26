import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useHistory = () => {
  const router = useRouter();
  const initialSearchData = {
    name: "",
  };
  const [searchData, setRegisterData] = useState(initialSearchData);

  const handleChangeSearchData = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...searchData, [name]: value });
  };

  const handleSubmitSearchData = async () => {
    // toast.loading("Mohon tunggu...");
    const { name } = searchData;
    console.log(searchData);

    // const res = await fetch(
    //   `http://localhost:3000/api/v1/auth/foods?name=${name}`
    // );
    // const data = await res.json();

    // console.log(data);
    // const { data, message, errorMessage } = await res.json();
    // toast.remove();

    // if (errorMessage) {
    //   alert(errorMessage);
    // }
    // toast.success("Registered complete, please login");

    // router.push(`/find/${name}`);
  };

  return { searchData, handleChangeSearchData, handleSubmitSearchData };
};
