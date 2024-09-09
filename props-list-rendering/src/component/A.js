import React from 'react'
import B from './B'
// for passing data parent to child we can use props 
let web = 'myapp'
const A = () => {
    return (
        <>
            <h1>this is Component A</h1>
            <B appname={web} />
        </>
    )
}

export default A