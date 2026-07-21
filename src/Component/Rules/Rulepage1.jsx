import React from "react";
import Carimg from '../../Assets/car.png';
import './Rulepage1.css';
export default function Rulepage1() {
    const myStyle = {
        color: "red",
        fontSize: "45px",
        backgroundColor: "green"
    }

    const arraymy = [];

    let myObj = {};

    function myFunname1() {

    }

    const myFun = () => {

    }

    return (
        <>
            <div>
                <h1>This is Rule page</h1>

                <h2>Function component</h2>

                <h2>hello world</h2>

                {/* <img src="" ></img>
                <input ></input>
                <br></br>
                <hr></hr>
                <link></link>
                <meta></meta>

                <img />
                <input />
                <br />
                <hr /> */}

                <img src={Carimg} alt="" />

                <h1 style={{
                    color: "red",
                    border: "2px solid green",
                    fontSize: "56px",
                    backgroundColor: "greenyellow",
                    margin: "50px"
                }}>hello world</h1>

                <h2 style={myStyle}>hello world</h2>

                <p id="hello">hello world</p>

                <div className="hello">hii team</div>
            </div>
        </>
    )
};
// const style.mydiv=``;