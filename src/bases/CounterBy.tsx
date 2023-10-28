import { useState } from "react"

interface CounterProps {
    initialValue?: number
}

interface CounterState {
    counter: number
    clicks: number
}

export const CounterBy = ({ initialValue = 5 }: CounterProps) => {
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

    const handleClick = (value: number) => {
        setCounterState((prev): CounterState => ({
            counter: prev.counter + value,
            clicks: prev.clicks + 1
        }));

    }
    return (
        <>
            <h1>Counter by: {counter}</h1>
            <h1>Counter by: {clicks}</h1>
            <button onClick={() => handleClick(1)}>
                +1
            </button>

            <button onClick={() => handleClick(5)}>
                +5
            </button>
        </>
    )
}
