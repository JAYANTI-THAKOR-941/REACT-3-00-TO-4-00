import { useEffect, useState } from 'react';
import './style.css'

const Counter = () => {

    const [count, setCount] = useState(10);
    const [value, setValue] = useState(1);

    const increaseValue = () => {
        setCount(count + 1);
    }

    const decreaseValue = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }


    const increase = () => {
        setValue(value + 1);
    }

    const decrease = () => {
        if (value > 0) {
            setCount(value - 1);
        }
    }

    const countChange = () => {
        console.log('Count is Updated..!');
    }


    useEffect(() => {
        countChange();
    },[count])

    return (
        <>
            <div className="counter">
                <button onClick={increaseValue}>+</button>
                <h2>{count}</h2>
                <button onClick={decreaseValue}>-</button>
            </div>

             <div className="counter">
                <button onClick={increase}>+</button>
                <h2>{value}</h2>
                <button onClick={decrease}>-</button>
            </div>

        </>
    )
}

export default Counter;