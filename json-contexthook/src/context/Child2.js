import React from 'react'
import { Mycontext } from './Context'
const Child2 = () => {
    const { yesOrNo } = Mycontext()
    return (
        <>
            <h4>child 2 say : {yesOrNo}</h4>
        </>
    )
}

export default Child2