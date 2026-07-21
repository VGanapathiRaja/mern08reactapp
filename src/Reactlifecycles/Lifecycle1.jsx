import React, { Component } from 'react'

export default class Lifecycle1 extends Component {
    constructor() {
        super()
        this.state = {
            candidate: "GanapathiRajaV",
            candidate: "Priya",
            candidate: "Divya",
            candidate: "Kiruthi",
        }
    }
    render() {
        return (
            <div>
                <h2>Life Cycle Phase #1 Mounting</h2>
                <h1>Lifecycle1 <span style={{ color: "blueviolet" }}>constractor()</span></h1>
                <p>Thank you .... <strong> {this.state.candidate} </strong> your application / profile submitted successfully....~!</p>
                <p>we Will get back Soon..😎😎😎</p>
            </div>
        )
    }
}
