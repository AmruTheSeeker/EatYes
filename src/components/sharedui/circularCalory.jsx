"use client";

import React from "react";
import { CircularProgressbarWithChildren, buildStyles  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { chewy } from "@/app/font";
import { useRouter } from "next/navigation";
import { BMRPopUp } from "./modalPop";

export const CircularCalory = () => {
  const router = useRouter();
  const value = 500;
  return (
    <div
      className="bg-secondary-200 w-full h-[300px] rounded-3xl"
      style={{
        borderColor: "#67C740",
        borderWidth: 4,
      }}
    >
      {/* CIRCULAR CALORY PROGRESS BAR */}
      <div>
        <div className="flex justify-between items-baseline mb-5 ml-9 mt-6 w-full">
          <h1
            className={chewy.className}
            style={{ color: "#F95F62", fontSize: "45px" }}
          >
            Calories
          </h1>
          <div className="mr-[50px] font-bold">
            <BMRPopUp />
          </div>
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
                    Calories
                  </h2>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>

      {/* CALORY HISTORIES FUNCTION */}
      <div className="relative">
        <button
          className="absolute bottom-1 right-6 px-7 py-1.5 bg-secondary-400 rounded-full"
          onClick={() => router.push("/login")}
        >
          <p className="text-center font-bold text-secondary-200">Histories</p>
        </button>
        <div className="absolute bottom-[125px] right-1 px-3">
          <h4 className="text-center font-bold">Base Calory Goals</h4>
          <div className="text-center">
            <h6
              className={chewy.className}
              style={{ color: "#67C740", fontSize: "20px" }}
            >
              2500 Calories
            </h6>
          </div>
          <div className="absolute bottom-[-70px] text-center">
            <h4 className="font-bold">Food Consumption</h4>
            <h6
              className={chewy.className}
              style={{ color: "#F95F62", fontSize: "20px" }}
            >
              500 Calories
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
