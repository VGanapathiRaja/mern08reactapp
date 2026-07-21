import React from 'react'
import { useContext } from 'react'
import Store from './Hub'
export default function Hookschild42() {
    const mydata2 = useContext(Store)
    return (
        <div>Hookschild42
            <h4> {mydata2} </h4>
        </div>
    )
}
