"use client"

import { RecoilRoot } from "recoil"

export const Provider = ({children}) => {
    return <RecoilRoot>{children}</RecoilRoot>
} 