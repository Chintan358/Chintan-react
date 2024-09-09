import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const input = useRef(null)
    const getData = () => {
        alert(input.current.value)
        input.current.value = 656
        input.current.focus()
    }
    return (
        <>
            <Child ref={input} />
            <button onClick={() => {
                getData()
            }}>Submit</button>
        </>
    )
}

export default Parent