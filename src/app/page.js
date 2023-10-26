"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <div className=" card bg-transparent">
        <Image
          src="/eatYesLogo.png"
          width={300}
          height={300}
          alt="EatYes! Logo"
        />
      </div>
      <div>
        <button
          className="btnSecondary w-[250px] h-[50px] text-3xl text-secondary-200"
          onClick={() => router.push("/account")}
        >
          I Wanna Eat!
        </button>
      </div>
    </div>
  );
}
