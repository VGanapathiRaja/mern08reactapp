import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
export default function Reacthook6() {

    const [timer, setTimer] = useState(20);

    const multi = useMemo(() => {
        console.log("working")
        return timer * timer;
    }, [timer])
    return (
        <div>Reacthook6
            <h4>useMemo()</h4>
            <p>Timer : {timer} </p>

            <p><strong> {multi} </strong></p>

            <button onClick={() => setTimer(timer + 1)}>add time</button>
        </div>
    )
}
