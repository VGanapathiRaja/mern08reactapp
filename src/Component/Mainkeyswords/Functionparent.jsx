import FunctionChild from "./Functionchild";
import { useState } from "react";
export default function Functionparent() {
    const [applicatnt, setApplicant] = useState(25);

    function nextApply() {
        setApplicant(applicatnt + 1)
    }
    return (
        <>
            <div>

                <h1>This is Function Component</h1>
                <p>State / Props / Event Handler</p>
                <h2>State <span style={{ color: 'red', fontSize: "12px" }}> Current = data / values / component</span></h2>
                <h2>Props <span style={{ color: 'red', fontSize: "12px" }}> Data carrier from component to component</span></h2>
                <h2>Event Handler <span style={{ color: 'red', fontSize: "12px" }}> Handle the event js concepts</span></h2>
                <p>Application: <strong> {applicatnt} </strong></p>
                <button style={{
                    background: "blue",
                    color: "#fff",
                    border: 'none',
                    padding: "10px"
                }}
                    onClick={nextApply}
                >Apply</button>


                <button onClick={() => setApplicant(applicatnt + 2)}>job apply</button>
            </div>
            <FunctionChild xxx={"hii child"} />
        </>
    )
}