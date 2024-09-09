import React from 'react'
import { Mycontext } from './Context'
const Child3 = () => {
    const { yesOrNo } = Mycontext()
    return (
        <>
            <h4>Child 3 say : {yesOrNo}</h4>
        </>
    )
}

export default Child3