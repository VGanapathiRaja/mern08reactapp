import React, { Component } from 'react'

export default class Classkeychilds extends Component {
    render() {
        return (
            <div>Classkeychilds
                <h3>this child class componet 2</h3>
                <p>Applicants: <strong>{this.props.myCandiate} </strong><span>default</span></p>
            </div>
        )
    }
}
