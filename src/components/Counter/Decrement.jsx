"use Client";

import { useRecoilState } from "recoil";
import { counterState } from "@/recoil/counter";

export const Decrement = () => {
  const [counter, setCounter] =useRecoilState(counterState)

  return <button onClick={() => setCounter(counter-1)}>Decrement</button>
};
