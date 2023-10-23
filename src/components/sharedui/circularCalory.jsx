"use client";

import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CircularCalory = () => {
const value = 2000;
  return (
    <div>
      <div className="flex justify-between items-baseline gap-2 border-b-2 mb-5 w-full">
        <h1 className="font-bold text-4xl text-secondary-400">
          Calories
          </h1>
        {/* <div className="flex items-center text-slate-200 bg-[rgb(99,163,178)] rounded-lg px-2 py-1">
          graphic
        </div> */}
      </div>
      <div>
        <div>
          <div className="w-[170px]">
            <CircularProgressbar
              value={value}
              maxValue={2500}
              text={`${value}`}
            />
            ;
          </div>
        </div>
      </div>
    </div>
  );
};
