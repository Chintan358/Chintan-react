import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':

            return { count: state.count + 1 }
            break;
        case 'DEC':
            if (state.count == 0) {
                return { count: state.count }
            }
            return { count: state.count - 1 }
            break;
        case 'RESET':
            return { count: 0 }
            break;

        default: return { count: state.count }
            break;
    }
}

export const Reducer = () => {

    const initialState = { count: 0 }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <button onClick={() => {
                dispatch({ type: "INC" })
            }}>Increement</button>
            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({ type: "DEC" })
            }}>Decreement</button>

            <button onClick={() => {
                dispatch({ type: "RESET" })
            }}>RESET</button>
        </>
    )
}
