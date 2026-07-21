import React from "react";
import Classchild from "./Classchild";

export default class Classmethodparent extends React.Component {
    constructor() {
        super()
        this.state = {
            application: 48,
            apply: 10
        }
    }

    jobApply() {
        this.setState({ application: this.state.application + 1 })
    }

    render() {
        return (
            <div>
                <h1>This is class Component</h1>
                <p>State / Props / Event Handler</p>
                <h2>State <span style={{ color: 'red', fontSize: "12px" }}> Current = data / values / component</span></h2>
                <h2>Props <span style={{ color: 'red', fontSize: "12px" }}> Data carrier from component to component</span></h2>
                <h2>Event Handler <span style={{ color: 'red', fontSize: "12px" }}> Handle the event js concepts</span></h2>

                <div>
                    <p>Applicants : <strong> {this.state.application} </strong> </p>
                    <p>Applicants : <strong> {this.state.apply} </strong> </p>

                    <button style={{
                        background: "blue",
                        color: "#fff",
                        border: 'none',
                        padding: "10px"
                    }}
                        onClick={() => this.jobApply()}
                    >Apply</button>

                </div>
                <Classchild myCount={this.state.application} />
                <Classchild myData={"hii child"} />
            </div>
        )
    }
} 