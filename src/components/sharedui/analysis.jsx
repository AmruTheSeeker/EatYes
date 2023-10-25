"use client";

import React from "react";


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
            <div>
              <h6 className="font-bold text-xs">
                End month weight prediction based on calory history
              </h6>
            </div>
          </div>
          <div
            className="bg-secondary-200 w-[180px] h-[200px] rounded-3xl"
            style={{
              borderColor: "#67C740",
              borderWidth: 4,
            }}
          >
            <div>
              <h6 className="font-bold text-xs">
                Most contributed food to your calory :
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
}