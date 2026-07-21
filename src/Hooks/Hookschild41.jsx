import React from 'react'
import Store from './Hub'
import { useContext } from 'react'
export default function Hookschild41() {
    const myData1 = useContext(Store)
    return (
        <div>Hookschild41
            <h4>{myData1}</h4>
        </div>
    )
}
