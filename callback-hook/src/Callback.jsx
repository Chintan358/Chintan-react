import React, { useCallback, useState } from 'react'
import Child from './Child'

const Callback = () => {
    const [count, setCount] = useState(0)
    const myCall = useCallback(() => {
        console.log('call');
    }, []);
    return (
        <>
            <h1>this is parent</h1>
            <Child callback={myCall} />
            <button onClick={() => {
                setCount(count + 1)
            }}>count: {count}</button>
        </>
    )
}

export default Callback