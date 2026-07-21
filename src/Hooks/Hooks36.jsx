import React from 'react'
import { useContext } from 'react'
import myStore from './Hooks3store'
export default function Hooks36() {
    const hii = useContext(myStore)
    return (
        <div>Hooks36
            <h4>hii parents <strong style={{ color: "blue" }}> {hii} </strong></h4>
        </div>
    )
}
