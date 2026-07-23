import React, { useReducer } from "react";

const initialState = {
    quantity: 1,
    price: 500,
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return { ...state, quantity: state.quantity + 1 };

        case "REMOVE":
            return {
                ...state,
                quantity: state.quantity > 1 ? state.quantity - 1 : 1,
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

export default function Cart() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>Shopping Cart</h2>

            <h3>Price : ₹{state.price}</h3>
            <h3>Quantity : {state.quantity}</h3>
            <h3>Total : ₹{state.price * state.quantity}</h3>

            <button onClick={() => dispatch({ type: "ADD" })}>+</button>

            <button onClick={() => dispatch({ type: "REMOVE" })}>-</button>

            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </>
    );
}