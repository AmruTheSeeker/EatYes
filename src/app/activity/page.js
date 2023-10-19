"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="m-8 max-w-[360px] mx-auto mt-8">
      <div className="card mb-2 p-4">
        <h1 className="text-center">What is your activity level?</h1>
      </div>
      <button
        className="btnSecondary w-[360px] text-3xl p-4 mt-2"
        onClick={() => router.push("/goal")}
      >
        Not very active
      </button>
      <div className="mx-auto mt-2 mb-2">
        <p className="text-primary-600">*Mostly just sitting</p>
      </div>
      <button
        className="btnSecondary w-[360px] text-3xl p-4 mt-2"
        onClick={() => router.push("#")}
      >
        Lightly active
      </button>
      <div className="mx-auto mt-2 mb-2">
        <p className="text-primary-600">*Often walking activity</p>
      </div>
      <button
        className="btnSecondary w-[360px] text-3xl p-4 mt-2"
        onClick={() => router.push("#")}
      >
        Active
      </button>
      <div className="mx-auto mt-2 mb-2">
        <p className="text-primary-600">*Have a lot physical activity</p>
      </div>
      <button
        className="btnSecondary w-[360px] text-3xl p-4 mt-2"
        onClick={() => router.push("#")}
      >
        Very Active
      </button>
      <div className="mx-auto mt-2 mb-2">
        <p className="text-primary-600">*Have a lot physical activity</p>
      </div>
    </div>
  );
}
