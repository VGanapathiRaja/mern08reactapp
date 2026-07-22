import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react';
export default function Reacthook5() {
    const [count, setCount] = useState(10);
    function addCount() {
        setCount(count + 1)
    }

    const myClick = useCallback(() => {
        setCount(count + 5);
    })

    const greet = useCallback(() => {
        alert("hii hello");
    })

    return (
        <div>Reacthook5
            <h3>useCallback()</h3>
            <p>one it call itself it call callback</p>
            <p>counter :  {count} </p>
            <button onClick={addCount}>add</button>
            <button onClick={myClick}>Alter add</button>
            <br />

            <button onClick={greet}> Msg</button>
        </div>
    )
}
