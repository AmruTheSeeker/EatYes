import { atom, selector } from "recoil";

export const counterState = atom ({
    key : "counterState",
    default : 0
})

export const doubleCounter = selector ({
    key : "doubleCounter",
    get : ({get}) => {
        const counter = get(counterState)
        return counter * 2
    }

})