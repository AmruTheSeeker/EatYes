"use Client"

import { counterState } from "@/recoil/counter"
import { useRecoilValue } from "recoil"

export const Counter = () => {
    const counter =  useRecoilValue(counterState)
    return <div className="text-secondary-900">Itungan: {counter}</div>
    
}