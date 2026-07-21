import React, { Component } from 'react'
import Lifecycle1 from './Lifecycle1'
import Lifecycle2 from './Lifecycle2'
import Lifecycle3 from './Lifecycle3'
import Lifecycle4 from './Lifecycle4'
import Lifecycle5 from './Lifecycle5'
import Lifecycle6 from './Lifecycel6'
import Lifecycle7 from './Lifecycle7'

export default class Lifecycles extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Lifecycles</h1>
                <h3>Mounting / Updating / Unmounting</h3>

                <Lifecycle1 />
                <hr />
                <Lifecycle2 profile={"Abi"} />
                <hr />
                <Lifecycle3 />
                <hr />
                <Lifecycle4 />
                <hr />
                <Lifecycle5 />
                <hr />
                <Lifecycle6 />
                <hr></hr>
                <Lifecycle7 />
            </div>
        )
    }
}
