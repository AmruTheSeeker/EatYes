"use client";

import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { chewy } from "@/app/font";


export const CircularCalory = () => {
const value = 2000;
  return (
    <div
      className="bg-secondary-200 w-full h-[300px] rounded-3xl"
      style={{
        borderColor: "#67C740",
        borderWidth: 4,
      }}
    >
      <div className="flex justify-between items-baseline mb-5 ml-9 mt-6 w-full">
        <h1
          className={chewy.className}
          style={{ color: "#F95F62", fontSize: "45px" }}
        >
          Calories
        </h1>
        {/* <div className="flex items-center text-slate-200 bg-[rgb(99,163,178)] rounded-lg px-2 py-1">
          graphic
        </div> */}
      </div>
      <div>
        <div>
          <div className="w-[170px] relative ml-5">
            {/* <CircularProgressbar
              value={value}
              maxValue={2500}
              text={`${value}`}
            /> */}
            <CircularProgressbarWithChildren
              value={value}
              maxValue={2500}
              text={`${value}`}
              styles={buildStyles({
                pathColor: "#F95F62",
                textColor: "#F95F62",
              })}
              className={chewy.className}
            >
              <div className="absolute bottom-[35px]">
                <h2
                  className={chewy.className}
                  style={{ color: "black", fontSize: "30px" }}
                >
                  Calory
                </h2>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
};
