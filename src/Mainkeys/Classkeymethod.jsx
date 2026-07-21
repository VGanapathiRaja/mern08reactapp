import React from "react";
import Classkeychild from "./Classkeychild";

export default class Classkeymethod extends React.Component {
    constructor() {
        super()
        this.state = {
            candidate: 45,
            applicand: 55,
            candiEmail: "ganapathi@gmail.com"
        }

        // this.apply = {
        //     applicand: 55
        // }
    }

    nextCandi() {
        this.setState({ candidate: this.state.candidate + 1 })
    }

    nextApply() {
        this.setState({ applicand: this.state.applicand + 5 })
    }

    nextEmailcandi = () => {
        this.setState({ candiEmail: "abi@gmail.com" })
    }
    // nextApply() {
    //     this.setState({ applicand: this.apply.applicand + 5 })
    // }

    render() {
        return (
            <div>
                <h2>This Class Component</h2>
                <h2>state / Props / Event Handler</h2>
                <p>Applicants: <strong>{this.state.candidate} </strong><span>default</span></p>

                <p>Applicants: {this.state.applicand} alternative</p>

                <p>thank you ,, <strong>{this.state.candiEmail} </strong> your appliaction submitted successfully...!!!</p>

                <button style={{
                    padding: "10px 20px",
                    border: "none",
                    backgroundColor: "blue",
                    color: "#fff",
                    borderRadius: "20px",
                    margin: "10px"
                }}

                    onClick={() => this.nextCandi()}
                >Apply</button>

                <button style={{
                    padding: "10px 20px",
                    border: "none",
                    backgroundColor: "yellowgreen",
                    color: "#fff",
                    borderRadius: "20px",
                    margin: "10px"
                }}

                    onClick={() => this.nextApply()}
                >Apply</button>

                <button style={{
                    padding: "10px 20px",
                    border: "none",
                    backgroundColor: "green",
                    color: "#fff",
                    borderRadius: "20px",
                    margin: "10px"
                }}

                    onClick={() => this.nextEmailcandi()}
                >Apply by Email</button>


                <Classkeychild myCandiate={this.state.candidate} />
            </div>
        )
    }
}