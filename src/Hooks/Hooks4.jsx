import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
// import { useState } from 'react'
import { useReducer } from 'react'

const myReduce = (state, action) => {
    switch (action.type) {
        case "add":
            return { count: state.count + 1 }
            break;
        case "sub":
            return { count: state.count - 3 }
            break;
        case "multi":
            return { count: state.count * 3 }
            break;
        case "div":
            return { count: state.count / 4 }
            break;
        case "aaa":
            return { count: state.count % 5 }
            break;
        case "inc":
            return { count: state.count++ }
            break;
        case "dec":
            return { count: state.count-- }
            break;
        default:
            // alert("enter a wrong ")
            return 0
            break
    }
}
export default function Hooks4() {
    // const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(myReduce, { count: 0 });

    // function add(){
    //     setcounter();
    // }
    return (
        <div>
            <h2>Hook 4 # useReduce()</h2>
            <p>Local / global state managements </p>
            <p>it little but avoid props drilling </p>
            <p>usereducer hook method work with the condition statments of switch,else if</p>

            {/* <p><strong> {counter} </strong></p> */}

            <p><strong> {state.count} </strong></p>

            <button style={{ padding: "5px 10px", margin: "5px" }}
                onClick={() => { dispatch({ type: "add" }) }}
            >+</button>
            <button style={{ padding: "5px 10px", margin: "5px" }}
                onClick={() => { dispatch({ type: "sub" }) }}>-</button>
            <button style={{ padding: "5px 10px", margin: "5px" }}
                onClick={() => { dispatch({ type: "multi" }) }}>*</button>
            <button style={{ padding: "5px 10px", margin: "5px" }}
                onClick={() => { dispatch({ type: "div" }) }}>/</button>
            <button style={{ padding: "5px 10px", margin: "5px" }}
                onClick={() => { dispatch({ type: "aaa" }) }}>%</button>
            <button style={{ padding: "5px 10px", margin: "5px" }}
                onClick={() => { dispatch({ type: "inc" }) }}>++</button>
            <button style={{ padding: "5px 10px", margin: "5px" }}
                onClick={() => { dispatch({ type: "dec" }) }}>--</button>

        </div >
    )
}
