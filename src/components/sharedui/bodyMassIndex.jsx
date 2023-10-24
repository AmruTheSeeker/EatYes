"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export const BodyMassIndex = () => {
    const router = useRouter();
  const data = [
    {
      name: "BMI",
      "Under Weight (0 - 18.5)": 18.5,
      "Normal Weight (18.5 - 25)": 6.5,
      "Over Weight (25 - 30)": 5,
      "Obesity (30 - 50)": 20,
    },
  ];

    return (
      <div className="mt-3">
        {/* <div>
          <button
            className="mt-5 px-7 py-1.5 bg-secondary-400 rounded-full"
            onClick={() => router.push("/login")}
          >
            <p className="text-center font-bold text-secondary-200">Check your BMI</p>
          </button>
        </div> */}
        <div>
          <BarChart width={380} height={70} data={data} layout="vertical">
            <XAxis type="number" domain={[0, "dataMax"]} />
            <YAxis dataKey="name" type="category" hide={true} />

            <Bar dataKey="Under Weight (0 - 18.5)" stackId="a" fill="#808080" />
            <Bar
              dataKey="Normal Weight (18.5 - 25)"
              stackId="a"
              fill="#67C740"
            />
            <Bar dataKey="Over Weight (25 - 30)" stackId="a" fill="#F95F62" />
            <Bar dataKey="Obesity (30 - 50)" stackId="a" fill="#000000" />
          </BarChart>
          <div className="flex mt-[-10px]">
            <div className="w-[180px] text-center text-[9px] ml-1">
              <div className="bg-[#808080] text-white">
                Under Weight (0 - 18.5)
              </div>
              <div className="bg-[#67C740] text-white">
                Normal Weight (18.5 - 25)
              </div>
            </div>
            <div className="absolute w-[180px] text-center text-[9px] ml-[198px]">
              <div className="bg-[#F95F62] text-white">
                Over Weight (25 - 30)
              </div>
              <div className="bg-[#000000] text-white">Obesity (30 - 50)</div>
            </div>
          </div>
        </div>
      </div>
    );
}