import "./App.css"
import React, { useEffect, useState } from 'react';

export default function Count(props){
    const { initial, increment } = props
    const [count, setCount] = useState(initial)


    function decrementCount() {
        setCount(prevCount => prevCount - increment)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + increment)
    }

    useEffect(() => {
        const storedCount = localStorage.getItem("count");
        setCount(parseInt(storedCount))
    },[])
    
    useEffect(() => {
        localStorage.setItem('count', count)
    }, [count])
    

    return (
        <div className="App">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}