"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="m-8 max-w-[360px] mx-auto mt-8">
      <div className="card mb-2 p-4">
        <h1 className="text-center">Do you have an account?</h1>
      </div>
      <button
        className="btnSecondary w-[360px] text-3xl mb-2 p-4"
        onClick={() => router.push("/goal")}
      >
        Not yet but I'm ready to begin my calory adventure!
      </button>
      <button
        className="btnSecondary w-[360px] text-3xl mb-2 p-4"
        onClick={() => router.push("/login")}
      >
        Yes, I have an account
      </button>
    </div>
  );
}
