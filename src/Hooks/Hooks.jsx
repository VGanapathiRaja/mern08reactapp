import React from 'react'
import Hook1 from './Hooks1'
import Hooks2 from './Hooks2'
import Hooks3 from './Hooks3'
import Hooks4 from './Hooks4'

export default function Hooks() {
    return (
        <div
            style={{ textAlign: "center" }}>
            <h1>Hooks</h1>
            <Hook1 />
            <hr />
            <Hooks2 />
            <hr />
            <Hooks3 />
            <hr />
            <Hooks4 />
        </div>
    )
}
