import React, { memo } from 'react'

const Child = (props) => {
    console.log('child');
    return (
        <>
            {props.callback()}
            <h1>this is child</h1>
        </>
    )
}

export default memo(Child)