import { useState } from "react"

interface CounterProps {
    initialValue?: number
}

export const Counter = ({ initialValue = 0 }: CounterProps ) => {
    const [counter, setCounter] = useState<number>(initialValue);

    const handleClick = (value: number) => {
        setCounter( prev => prev + value);
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={ () => handleClick(1)}>
                +1
            </button>
        </>
    )
}
  