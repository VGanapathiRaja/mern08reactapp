import React, { Component } from 'react'

export default class Lifecycle3 extends Component {
    constructor() {
        super()
        this.state = {
            candidate: "Kiruthi",
        }
    }
    render() {
        return (
            <div>
                <h2>Life Cycle Phase #1 Mounting</h2>
                <h1>Lifecycle1 <span style={{ color: "blueviolet" }}>render()</span></h1>
                <p>Deployement component / output /result component is Render()</p>
                <p>Thank you .... <strong> {this.state.candidate} </strong> your application / profile submitted successfully....~!</p>
                <p>we Will get back Soon..😎😎😎</p>
            </div >
        )
    }
}
