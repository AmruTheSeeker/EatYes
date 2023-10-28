"use client";

import React from "react";
import { chewy } from "@/app/font";

export const Analysis = () => {
  return (
    <div>
      <div className="flex mb-2">
        <div className="ml-3 px-3 py-1.5 bg-secondary-400 rounded-full font-black text-secondary-200 w-[150px] text-center">
          Weight Analysis
        </div>
        <div className="ml-[53px] px-3 py-1.5 bg-secondary-400 rounded-full font-black text-secondary-200 w-[150px] text-center">
          Food Analysis
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="bg-secondary-200 w-[180px] h-[200px] rounded-3xl"
          style={{
            borderColor: "#67C740",
            borderWidth: 4,
          }}
        >
          <div className="flex ml-4 mt-4">
            <h6 className="font-bold text-xs text-center">
              End month weight prediction based on calory history :
            </h6>
          </div>
          <div className="flex ml-4">
            <div>
              <h1
                className={chewy.className}
                style={{ color: "#F95F62", fontSize: "80px" }}
              >
                105
              </h1>
            </div>
            <div className="mt-8">
              <h4
                className={chewy.className}
                style={{ color: "#F95F62", fontSize: "40px" }}
              >
                kg
              </h4>
            </div>
          </div>
          <div className="flex ml-8">
            <h6 className="font-bold text-xs">Your recent weight is</h6>
          </div>
          <div className="flex ml-[50px]">
            <h6 className="font-bold text-3xl">98 kg</h6>
          </div>
        </div>
        <div
          className="bg-secondary-200 w-[180px] h-[200px] rounded-3xl"
          style={{
            borderColor: "#67C740",
            borderWidth: 4,
          }}
        >
          <div className="flex ml-3 mt-4">
            <h6 className="font-bold text-xs text-center">
              Most contributed food to your calory :
            </h6>
          </div>
          <div className="grid grid-cols-2">
            <div className="ml-3 mt-4">
              <h6 className="font-bold text-xs text-secondary-400">
                1. Nasi Goreng
              </h6>
            </div>
            <div className="ml-4 mt-4">
              <h6
                className="font-bold text-center text-xs text-secondary-400 rounded-full"
                style={{
                  borderColor: "#67C740",
                  borderWidth: 2,
                }}
              >
                250 calory
              </h6>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="ml-3 mt-4">
              <h6 className="font-bold text-xs text-secondary-400">
                2. Mie Goreng
              </h6>
            </div>
            <div className="ml-4 mt-4">
              <h6
                className="font-bold text-center text-xs text-secondary-400 rounded-full"
                style={{
                  borderColor: "#67C740",
                  borderWidth: 2,
                }}
              >
                350 calory
              </h6>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="ml-3 mt-4">
              <h6 className="font-bold text-xs text-secondary-400">
                3. Rendang
              </h6>
            </div>
            <div className="ml-4 mt-4">
              <h6
                className="font-bold text-center text-xs text-secondary-400 rounded-full"
                style={{
                  borderColor: "#67C740",
                  borderWidth: 2,
                }}
              >
                200 calory
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
