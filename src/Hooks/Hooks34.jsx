import React from 'react'
import { useContext } from 'react'
import myStore from './Hooks3store'
export default function Hooks34() {
    const myData = useContext(myStore)
    return (
        <div>Hooks34
            <h4>hii parents <strong style={{ color: "blue" }}> {myData} </strong></h4>
        </div>
    )
}
