import React from 'react'
import Hookschild33 from './Hookschild33'
import Hookschil332 from './Hookschil332'
import Hookschild41 from './Hookschild41'
import Hookschild42 from './Hookschild42'

import Store from './Hub'

export default function Hooks333() {
    return (
        <div>Hooks333

            <h2>this is parent</h2>

            <Hookschild33 hichild={"hello child hi child how are you?"} />
            <Hookschil332 hichild={"hello child hi child how are you?"} />

            <hr />

            <Store.Provider value={"hii helo hoii tean"} >
                <Hookschild41 />
                <Hookschild42 />
            </Store.Provider>


        </div>
    )
}
