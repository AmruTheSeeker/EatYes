"use Client"

import { useRecoilValue } from "recoil"
import { doubleCounter } from "@/recoil/counter"

export const DoubleCounter = () => {
    const doubledyaCounter =  useRecoilValue(doubleCounter)

    return (
      <div className="text-secondary-900">
        Itungan kali dua: {doubledyaCounter}
      </div>
    );
    
}