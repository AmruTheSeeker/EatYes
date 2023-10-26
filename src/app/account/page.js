"use client";

import { useRouter } from "next/navigation";
import { chewy } from "../font";


export default function Page() {
  const router = useRouter();

  return (
    <div>
      <div className="m-8 mb-2 p-4 text-center max-w-[500px] mx-auto mt-8">
        <h1
          className={chewy.className}
          style={{ color: "black", fontSize: "100px" }}
        >
          Do you have an account?
        </h1>
      </div>
      <div className="m-8 max-w-[360px] mx-auto mt-8">
        <button
          className="btnSecondary w-[360px] h-30 text-3xl mb-2 p-4 bg-green-400 text-secondary-200"
          onClick={() => router.push("/register")}
        >
          Not yet but I'm ready to begin my calory adventure!
        </button>
      </div>
      <div className="m-8 max-w-[360px] mx-auto mt-8" >
        <button
          className="btnSecondary w-[360px] h-30 text-3xl mb-2 p-4 bg-blue-500 text-secondary-200"
          onClick={() => router.push("/login")}
        >
          Yes, I have an account
        </button>
      </div>
    </div>
  );
}
