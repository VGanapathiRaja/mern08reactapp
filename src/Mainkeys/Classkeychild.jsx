import React from "react";
import Classkeychilds from "./Classkeychilds";

export default class Classkeychild extends React.Component {
    constructor() {
        super()
        this.state = {
            candi: 48
        }
    }
    render() {
        return (
            <div>
                <h2>This is Class child COmponent 1  jjjjj</h2>
                <h4> hi Parent</h4>
                <p> Applicants: <strong>{this.props.myCandiate} </strong><span>default</span></p>
                <Classkeychilds myCandiate={this.state.candi} />
            </div>
        )
    }
}