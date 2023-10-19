"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="m-8 max-w-[360px] mx-auto mt-8">
      <div className="card mb-2 p-4">
        <h1 className="text-center">What is your goal?</h1>
      </div>
      <button
        className="btnSecondary w-[360px] text-3xl mb-2 p-4"
        onClick={() => router.push("/activity")}
      >
        Loose weight
      </button>
      <button
        className="btnSecondary w-[360px] text-3xl mb-2 p-4"
        onClick={() => router.push("#")}
      >
        Maintain weight
      </button>
      <button
        className="btnSecondary w-[360px] text-3xl mb-2 p-4"
        onClick={() => router.push("#")}
      >
        Increase weight
      </button>
      <div className="mx-auto p-4">
        <p className="text-primary-600">
          * Choose your goal which suitable to your target
        </p>
      </div>
    </div>
  );
}
