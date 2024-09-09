import React, { forwardRef } from 'react'

const Child = (props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef(Child)