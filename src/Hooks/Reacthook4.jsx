import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react';
export default function Reacthook4() {

    const myRef = useRef();

    function hasFormSubmit() {
        myRef.current.focus()
    }

    // const [counter, setCounter] = useState(10);
    // const preveCount = useRef();



    return (
        <div>Reacthook4
            <h2>useRef()</h2>
            <p>referencee to old datas</p>
            <p>form tags</p>
            <form >
                <input type="text" ref={myRef} />
                <button onClick={hasFormSubmit}>hello</button>
            </form>

            {/* <p>Counter : {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Click me</button> */}
        </div>
    )
}
