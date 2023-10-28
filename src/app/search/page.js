"use client";

import { useRouter } from "next/navigation";
import { useSearch } from "@/components/auth/hooks/useSearch";
import { TextInput } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Page(request) {
  const { handleChangeSearchData, handleSubmitSearchData } = useSearch();

  const router = useRouter();
  return (
    <div className="m-8 max-w-[360px] mx-auto mt-8">
      <div className="flex justify-center">
        <Image
          src="/eatYesLogo.png"
          width={230}
          height={230}
          objectFit="cover"
          alt="Background image"
        />
      </div>
      <div className="text-center">
        <h6>
          "Let food be thy medicine and medicine be thy food."- Hippocrates
        </h6>
      </div>
      <div className="mt-6">
        <TextInput
          name="name"
          id="base"
          sizing="md"
          type="text"
          placeholder="What do you want to eat?"
          onChange={handleChangeSearchData}
        />
      </div>
      <button
        className="w-[360px] mt-5 p-2 text-secondary-200 rounded-xl"
        onClick={handleSubmitSearchData}
      >
        Search
      </button>
    </div>
  );
}
