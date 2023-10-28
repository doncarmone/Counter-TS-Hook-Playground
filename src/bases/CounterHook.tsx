import { useCounter } from "../hooks/useCounter"


export const CounterHook = () => {
    const {counter, elementToAnime, handleClick} = useCounter({
        maxCount: 15
    });

    return (
        <>
            <h1>Counter Effect: </h1>
            <h2 ref={elementToAnime}>{counter}</h2>
            <button onClick={() => handleClick(1)}>
                +1
            </button>
        </>
    )
}
