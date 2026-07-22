import React from 'react'
import { useReducer } from 'react'

const arithReducer = (state, action) => {
    switch (action.type) {
        case "dinesh":
            return ({ count: state.count + 3 })
            break;
        case 2:
            return ({ count: state.count - 2 })
            break;
        case 3:
            return ({ count: state.count * 2 })
            break;
        case 4:
            return ({ count: state.count / 2 })
            break;
        case 5:
            return ({ count: state.count % 2 })
            break;
        case 6:
            return ({ count: state.count++ })
            break;
        case 7:
            return ({ count: state.count-- })
            break;
        default:
            return (state)
            break;
    }
}


export default function Reacthook8() {
    const [state, dispacth] = useReducer(arithReducer, { count: 5 });
    return (
        <div>Reacthook8
            <p>Counting : <strong>  {state.count}  </strong></p>

            <button style={{ padding: "10px 15px", margin: "5px 10px" }} onClick={() => dispacth({ type: "dinesh" })}>Add(create   )</button>
            <button style={{ padding: "10px 15px", margin: "5px 10px" }} onClick={() => dispacth({ type: 2 })}>Sub</button>
            <button style={{ padding: "10px 15px", margin: "5px 10px" }} onClick={() => dispacth({ type: 3 })}>Multi</button>
            <button style={{ padding: "10px 15px", margin: "5px 10px" }} onClick={() => dispacth({ type: 4 })}>Div</button>
            <button style={{ padding: "10px 15px", margin: "5px 10px" }} onClick={() => dispacth({ type: 5 })}>Module Div</button>
            <button style={{ padding: "10px 15px", margin: "5px 10px" }} onClick={() => dispacth({ type: 6 })}>Inc</button>
            <button style={{ padding: "10px 15px", margin: "5px 10px" }} onClick={() => dispacth({ type: 7 })}>Dec</button>
            <button style={{ padding: "10px 15px", margin: "5px 10px" }} onClick={() => dispacth({ type: 9 })}> Reset</button>
        </div>
    )
}
