"use client";
import React from "react";
import Link from "next/link";

export const CaloryCard = () => {
  return (
    <div className="flex justify-between items-baseline gap-2 border-b-2 mb-5 w-full">
      <h1 className="text-lg font-bold">Calory base</h1>
      <div className="flex items-center text-slate-200 bg-[rgb(99,163,178)] rounded-lg px-2 py-1">graphic</div>
    </div>
  );
};
