import React, { Component } from 'react'

export default class Lifecycle4 extends Component {
    constructor() {
        super()
        this.state = {
            candidate: "Kiruthi",
            Timer: 0
        }
    }

    // setTimeout(()=>{},5000)
    componentDidMount() {
        setTimeout(() => {
            this.setState({ candidate: "seleema" })
            // alert("hi team setTimeout...!!")
        }, 5000)


        // setInterval(() => {
        //     alert("hii team, hello")
        // }, 6000)

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => { console.log(data) })
            .catch((e) => { console.error(e) })

        setInterval(() => {
            this.setState({ Timer: this.state.Timer + 1 });
        }, 1000)
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         // alert("hii team, hello")
    //     }, 6000)
    // }
    render() {
        return (
            <div>
                <h2>Life Cycle Phase #1 Mounting</h2>
                <h1>Lifecycle1 <span style={{ color: "blueviolet" }}>componentDidMount()</span></h1>
                <p>Focus to only the scheduling and fetching concept component is componentDidMount()</p>
                <p>Thank you .... <strong> {this.state.candidate} </strong> your application / profile submitted successfully....~!</p>
                <p>we Will get back Soon..😎😎😎</p>

                <button style={{
                    backgroundColor: "green",
                    color: "#fff",
                    fontSize: "26px",
                    padding: "10px 20px",
                    margin: "10px",
                    border: "none"
                }}>{this.state.Timer}</button>
            </div >
        )
    }
}
