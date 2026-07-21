import React, { Component } from 'react'

export default class Lifecycle5 extends Component {
    constructor() {
        super()
        this.state = {
            candidate: "Divya",
        }
    }

    nextCandi() {
        this.setState({ candidate: "Nanthini" });
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ candidate: "Dineshkumar" });
        }, 5000)
    }

    shouldComponentUpdate() {
        // return true;
        // return false;
        // return this.candidate = true;
        return this.candidate = false;
    }

    render() {
        return (
            <div>
                <h2>Life Cycle Phase #2 Updating</h2>
                <h1>Lifecycle5 <span style={{ color: "blueviolet" }}>componentShouldUpdate()</span></h1>
                <p>Thank you .... <strong> {this.state.candidate} </strong> your application / profile submitted successfully....~!</p>
                <p>we Will get back Soon..😎😎😎</p>

                <button style={{ padding: "10px 20px", margin: "10px 5px" }}
                    onClick={() => this.nextCandi()}>next Candidate</button>
            </div>
        )
    }
}
