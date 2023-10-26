"use client"

import { Counter } from "@/components/Counter/Counter";
import { Increment } from "@/components/Counter/Increment";
import { Decrement } from "@/components/Counter/Decrement";
import { DoubleCounter } from "@/components/Counter/DoubleCounter";
  
export default function Page() {
  return (
    <div>
      <Counter/>
      <Increment/>
      <Decrement/>
      <DoubleCounter/> 
    </div>
  );
}
