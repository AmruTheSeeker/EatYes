"use Client";

import { useRecoilState } from "recoil";
import { counterState } from "@/recoil/counter";

export const Increment = () => {
  const [counter, setCounter] =useRecoilState(counterState)

  return <button onClick={() => setCounter(counter+1)}>Increment</button>
};
