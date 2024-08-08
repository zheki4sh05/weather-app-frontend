"use client"
import { useEffect } from "react"

export function InstallBootstrap(){

    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap.bundle")
    })

    return <></>
}