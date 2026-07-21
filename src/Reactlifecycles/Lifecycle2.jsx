import React, { Component } from 'react'

export default class Lifecycle2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            candidate: "GanapathiRajaV"
        }
    }

    static getDerivedStateFromProps(props, state) {
        return ({ candidate: props.profile })
    }
    render() {
        return (
            <div>
                <h2>Life Cycle Phase #1 Mounting</h2>
                <h1>Lifecycle2 <span style={{ color: "blueviolet" }}>getDerivedStateFromProps()</span></h1>
                <p>Thank you .... <strong> {this.state.candidate} </strong> your application / profile submitted successfully....~!</p>
                <p>we Will get back Soon..😎😎😎</p>
            </div>
        )
    }
}
