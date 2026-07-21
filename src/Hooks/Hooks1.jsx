import React from "react";
import { useState } from "react";
const Hook1 = () => {
    const [applicant, setApplicant] = useState(10);

    function apply() {
        setApplicant(applicant + 1)
    }

    const [counter, setCounter] = useState(0);
    const [rate, setRate] = useState(1010);
    const dec = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <div>
            <h2>Hook 1 # useState()</h2>
            <p>Focus to current data / Value / Component</p>
            <div>
                <p>APllication : {applicant} </p>

                <button onClick={apply}>Apply</button>
            </div>

            <div>
                <h3>Simple Counter App</h3>
                <button style={{
                    backgroundColor: "burlywood",
                    color: "#fff",
                    fontSize: "26px",
                    border: "none",
                    padding: "10px 20px",
                    margin: "10px 0"

                }}> {counter}  </button>

                <button style={{
                    backgroundColor: "burlywood",
                    color: "#470505",
                    fontSize: "26px",
                    border: "none",
                    padding: "10px 20px",
                    margin: "10px 10px"
                }}>{rate * counter}</button>

                <div>
                    <button style={{
                        backgroundColor: "red",
                        border: "none",
                        padding: "10px 15px",
                        color: "#1c0303",
                        fontSize: "18px"
                    }}
                        // onClick={() => setCounter(counter - 1)}
                        onClick={dec}
                    > Dec </button>

                    <button style={{
                        backgroundColor: "black",
                        border: "none",
                        padding: "10px 15px",
                        color: "#fff",
                        fontSize: "18px"
                    }}
                        onClick={() => setCounter(0)}
                    > Reset </button>

                    <button style={{
                        backgroundColor: "greenyellow",
                        border: "none",
                        padding: "10px 15px",
                        color: "#1c0303",
                        fontSize: "18px"
                    }}
                        onClick={() => setCounter(counter + 1)}
                    > Inc </button>
                </div>
            </div>
        </div>
    )
};
export default Hook1;