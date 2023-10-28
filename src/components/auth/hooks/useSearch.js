import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useSearch = () => {
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
    const { name } = searchData;

    router.push(`/find/${name}`);
  };

  return { searchData, handleChangeSearchData, handleSubmitSearchData };
};
