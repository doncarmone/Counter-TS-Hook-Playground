import { useReducer } from "react"

interface CounterState {
    counter: number
    previous: number
    changes: number
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction =
    | { type: 'increseBy', payload: { value: number; } }
    | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    
    const { counter, changes } = state

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        case 'increseBy':
            const { value } = action.payload
            return {
                ...state,
                previous: counter,
                counter: counter + value,
                changes: changes + 1,
            }
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {
    const [{ counter, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    const increaseBy = (value: number) => {
        dispatch({
            type: 'increseBy',
            payload: { value }
        })
    }

    return (
        <>
            <h1>CounterReducerComponent:</h1>
            <h3>Counter: {counter}</h3>
            <h3>Changes: {changes}</h3>
            <h3>Prev: {previous}</h3>
            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={() => increaseBy(10)}>
                +10
            </button>
            <button onClick={() => handleReset()}>
                Reset
            </button>
        </>
    )
}
