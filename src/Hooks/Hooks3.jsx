import React from 'react'
import Hooks31 from './Hooks31'
import Hooks32 from './Hooks32'
import Hooks34 from './Hooks34'
import Hooks33 from './Hooks33'
import Hooks35 from './Hooks35'
import Hooks36 from './Hooks36'

import myStore from './Hooks3store'
import Hooks333 from './Hooks333'

export default function Hooks3() {
    return (
        <div>
            <h2>Hook 3 # useContext()</h2>
            <p>Local / global state managements </p>
            <p>it little but avoid props drilling </p>
            <Hooks31 myMsg="Hi child hello world hii team" />
            <Hooks32 myMsg={"HI child hello world"} />
            <Hooks33 myMsg={"HI child hello world"} />
            <hr />
            <myStore.Provider value={"hii child how are you? hii friends"}>
                <Hooks34 />
                <Hooks35 />
                <Hooks36 />
            </myStore.Provider>
            <hr />

            <Hooks333 />
        </div>
    )
}
