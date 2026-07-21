import React from 'react'
import { useContext } from 'react'
import myStore from './Hooks3store'
export default function Hooks35() {
    const nanthini = useContext(myStore)
    return (
        <div>Hooks35
            <h4>hii parents <strong style={{ color: "blue" }}> {nanthini} </strong></h4>
        </div>
    )
}
