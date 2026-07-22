import React from 'react'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
export default function Reacthook7() {
    const myuseRef = useRef()
    const myTitle = useLayoutEffect(() => {
        myuseRef.current.style.color = "blue"
        myuseRef.current.style.backgroundColor = "green"
    }, [])
    return (
        <div>Reacthook7

            <h1 ref={myuseRef}> hii team</h1>
            <h2 style={{ color: "red" }}>hiii</h2>
        </div >
    )
}
