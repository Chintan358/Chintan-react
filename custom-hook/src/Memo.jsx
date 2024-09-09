import React, { useState, useMemo } from 'react';

const Memo = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const myContast = useMemo(() => {
        console.log('hello');
        return 'helllo'
    }, [count])

    return (
        <>
            {myContast}
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    );
}

export default Memo;
