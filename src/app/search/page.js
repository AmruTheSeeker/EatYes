"use client";

import { useRouter } from "next/navigation";
import { useSearch } from "@/components/auth/hooks/useSearch";
import Link from "next/link";

export default function Page(request) {
  const { handleChangeSearchData, handleSubmitSearchData } = useSearch();

  const router = useRouter();
  return (
    <div className="m-8 max-w-[360px] mx-auto mt-8">
      <div className="mb-2 p-4 text-center">
        <h1 style={{ color: "black", fontSize: "80px" }}>EatYes!</h1>
      </div>
      <input
        name="name"
        className="rounded-full"
        placeholder="Mau makan apa?"
        onChange={handleChangeSearchData}
      />
      <button
        className="btnSecondary w-[360px] mb-2 p-4 bg-blue-500 text-secondary-200"
        onClick={handleSubmitSearchData}
      >
        Cari
      </button>
    </div>
  );
}
