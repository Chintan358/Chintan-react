import React, { useState } from 'react'
import { Mycontext } from './Context'
const Child1 = () => {
    const { yesOrNo } = Mycontext()
    return (
        <>

            <h4>child 1 say : {yesOrNo}</h4>
        </>
    )
}

export default Child1