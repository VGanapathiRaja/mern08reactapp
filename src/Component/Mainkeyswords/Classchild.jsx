import React from "react";

export default class Classchild extends React.Component {
    render() {
        return (
            <>
                <h3>This is Class child page hhhhhhh</h3>
                <p>hii parent page</p>
                <p>Applicants : <strong> {this.props.myCount} </strong> </p>
                <p>Applicants : <strong> {this.props.myData} </strong> </p>
            </>
        )
    }
}