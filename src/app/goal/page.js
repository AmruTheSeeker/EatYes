"use client";

import { useRouter } from "next/navigation";
import { chewy } from "../font";

export default function Page() {
  const router = useRouter();
  return (
    <div className="m-8 max-w-[360px] mx-auto mt-8">
      <div className="mb-2 p-4 text-center">
        <h1
          className={chewy.className}
          style={{ color: "black", fontSize: "80px" }}
        >
          What is your goal?
        </h1>
      </div>
      <button
        className="btnSecondary w-[360px] text-3xl mb-2 p-4 bg-blue-500 text-secondary-200"
        onClick={() => router.push("/activity")}
      >
        Loose weight
      </button>
      <button
        className="btnSecondary w-[360px] text-3xl mb-2 p-4 bg-blue-500 text-secondary-200"
        onClick={() => router.push("#")}
      >
        Maintain weight
      </button>
      <button
        className="btnSecondary w-[360px] text-3xl mb-2 p-4 bg-blue-500 text-secondary-200"
        onClick={() => router.push("#")}
      >
        Increase weight
      </button>
      <div className="mx-auto p-4">
        <p className="text-secondary-400">
          * Choose your goal which suitable to your target
        </p>
      </div>
    </div>
  );
}
