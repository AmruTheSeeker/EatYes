"use client";
import React from "react";
import Link from "next/link";

export const CaloryCard = () => {
    return (
      <div className="bg-red-500 w-full">
        <div className="flex justify-evenly items-baseline gap-2 border-b-2 mb-5  w-[350px]">
          <h1 className="text-[28px] font-bold">Calory base</h1>
          <h1 className="flex items-center text-[25px] text-slate-200 bg-[rgb(99,163,178)] rounded-lg p-2">
            graphic
          </h1>
        </div>
      </div>
    );
}