import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Hooks2() {
    const [timer, setTimer] = useState(3)

    const [info, setInfo] = useState([])

    useEffect(() => {
        // setInterval(() => { setTimer(timer + 1) }, 1 * 1000)

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((x) => x.json())
            .then((d) => { console.log(d) })
            .catch((e) => { console.log(e) })

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setInfo(data)
            })
            .catch((err) => { console.log(err) })
    }, [])
    return (
        <div>
            <h2>Hook 2 # useEffect()</h2>
            <p>Side effects of current Component</p>
            <p>Controlling the current component and scheduling function and Fetch</p>
            <h4>Timer App simple</h4>
            <button style={{
                backgroundColor: "burlywood",
                color: "#fff",
                fontSize: "26px",
                border: "none",
                padding: "10px 20px",
                margin: "10px 0"

            }}> {timer} </button>

            <h4>user Data</h4>

            {/* { 
                ()=>{}// once got output no need {}
                ()=>{}// once coudn't get  output  need {}
            } */}

            {
                info.map((userinfo) =>
                    <p key={userinfo.id}> {userinfo.username} </p>
                )
            }

        </div>
    )
}
