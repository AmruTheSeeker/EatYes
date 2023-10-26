"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const ScanButton = () => {
  const router = useRouter();
  return (
    <button
      className="bg-secondary-500 rounded-full w-full h-20 text-4xl font-bold mt-8"
      onClick={() => router.push("/search")}
    >
      SCAN THE FOOD
    </button>
  );
};
