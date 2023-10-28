"use client";

import { useRouter } from "next/navigation";
import { chewy } from "../font";
import Image from "next/image";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <div className="m-8 mb-2 p-4 text-center max-w-[400px] mx-auto mt-8">
        <h1
          className={chewy.className}
          style={{ color: "black", fontSize: "80px" }}
        >
          Do you have an account?
        </h1>
      </div>

      <div className="m-8 max-w-[360px] mx-auto mt-8">
        <button
          className="btnSecondary w-[360px] h-[90px] text-xl font-bold mb-2 p-4 bg-green-400 text-secondary-200 rounded-full"
          onClick={() => router.push("/register")}
        >
          Not yet but I'm ready to begin my calory adventure!
        </button>
      </div>
      <div className="m-8 max-w-[360px] mx-auto mt-8">
        <button
          className="btnSecondary w-[360px] h-[90px] text-xl font-bold mb-2 p-4 bg-blue-500 text-secondary-200 rounded-full"
          onClick={() => router.push("/login")}
        >
          Yes, I have an account
        </button>
      </div>
    </div>
  );
}
