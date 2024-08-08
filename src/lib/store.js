import { configureStore } from "@reduxjs/toolkit"
import weatherSlice from "./features/weatherSlice"

export const makeStore=()=>{
    return configureStore({
        reducer:{
            weather:weatherSlice
        }
    })
}