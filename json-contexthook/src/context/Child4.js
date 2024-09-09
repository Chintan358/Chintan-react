import React from 'react'
import { Mycontext } from './Context'
const Child4 = () => {
    const { yesOrNo, setyesOrNo } = Mycontext()
    return (
        <>
            <button onClick={() => {
                let decision = yesOrNo == 'yes' ? 'no' : 'yes'
                setyesOrNo(decision)
            }}> Set {yesOrNo == 'yes' ? 'No' : 'Yes'} </button>
        </>
    )
}

export default Child4