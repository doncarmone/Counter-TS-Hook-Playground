import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";


export const useCounter = ({ maxCount = 10 }) => {
    
    const [counter, setCounter] = useState<number>(1);

    const elementToAnime = useRef<any>(null);
    const tl = useRef(gsap.timeline());

    const handleClick = (value: number) => {
        // setCounter( prev => prev < MAXIUM_COUNT ? prev + value : prev);
        setCounter(prev => Math.min(prev + value, maxCount));
    }

    useLayoutEffect(() => {
        if( !elementToAnime.current) return;
        tl.current.to(elementToAnime.current, { y: -10, duration: 0.2, ease: 'ease.out' })
                  .to(elementToAnime.current, { y: 0, duration: 1, ease: 'bounce.out' })
                  .pause();
    }, [])

    
    useEffect(() => {
        // if ( counter < maxCount) return;

        tl.current.play(0);
    }, [counter])

    return {
        counter,
        elementToAnime,
        handleClick
    }
}