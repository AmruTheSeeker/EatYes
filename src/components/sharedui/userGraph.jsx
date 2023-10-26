"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";;
   
const data = [
  {
    name: "Sunday",
    DailyCalory: 4000,
    GoalCalory: 3000,
  },
  {
    name: "Monday",
    DailyCalory: 2500,
    GoalCalory: 3000,
  },
  {
    name: "Tuesday",
    DailyCalory: 3250,
    GoalCalory: 3000,
  },
  {
    name: "Wednesday",
    DailyCalory: 3000,
    GoalCalory: 3000,
  },
  {
    name: "Thursday",
    DailyCalory: 3400,
    GoalCalory: 3000,
  },
  {
    name: "Friday",
    DailyCalory: 3600,
    GoalCalory: 3000,
  },
  {
    name: "Saturday",
    DailyCalory: 3200,
    GoalCalory: 3000,
  },
];


export const GraphGuest = () => { 
    return (
      <div>
        <h5 className="text-secondary-400 font-bold">Daily Chart</h5>
        <AreaChart
          width={400}
          height={270}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorDailyCalory" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D62829" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#D62829" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorGoalCalory" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend
            width={150}
            wrapperStyle={{
              top: 150,
              right: 30,
              backgroundColor: "#f5f5f5",
              border: "0px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "20px",
            }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="DailyCalory"
            stroke="#D62829"
            fillOpacity={1}
            fill="url(#colorDailyCalory)"
          />
          <Area
            type="monotone"
            dataKey="GoalCalory"
            stroke="#000000"
            fillOpacity={0}
            fill="url(#colorGoalCalory)"
          />
        </AreaChart>
      </div>
    );
}
