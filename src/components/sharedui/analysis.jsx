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
            <div className="flex ml-5 mt-4">
              <h6 className="font-bold text-xs">
                End month weight prediction based on calory history
              </h6>
            </div>
            <div className="flex ml-6">
              <div>
                <h1
                  className={chewy.className}
                  style={{ color: "#F95F62", fontSize: "80px" }}
                >
                  70
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
              <div>
                
              </div>
            </div>
          </div>
          <div
            className="bg-secondary-200 w-[180px] h-[200px] rounded-3xl"
            style={{
              borderColor: "#67C740",
              borderWidth: 4,
            }}
          >
            <div className="flex ml-5 mt-4">
              <h6 className="font-bold text-xs">
                Most contributed food to your calory :
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
}