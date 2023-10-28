import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const MAXIUM_COUNT: number = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState<number>(5);

    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = (value: number) => {
        // setCounter( prev => prev < MAXIUM_COUNT ? prev + value : prev);
        setCounter(prev => Math.min(prev + value, MAXIUM_COUNT));
    }

    useEffect(() => {
        // if (counter < 10) return;
        // console.log('%c Se llego al valor maximo', 'color: red; background-color: black;')

        const timeline = gsap.timeline();

        timeline.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });

    }, [counter])

    return (
        <>
            <h1>Counter Effect: </h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={() => handleClick(1)}>
                +1
            </button>
        </>
    )
}
