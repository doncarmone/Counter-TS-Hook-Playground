import { useReducer } from "react"
import { CounterState } from "./interfaces/interfaces"
import { counterReducer } from "./state/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducerComponent = () => {
    const [{ counter, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch(doReset())
    }

    const increaseBy = (value: number) => {
        dispatch(doIncreaseBy(value))
    }

    return (
        <>
            <h1>CounterReducer Seg:</h1>
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
