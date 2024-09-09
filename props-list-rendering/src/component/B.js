import React from 'react'
import D from './D'

const B = (props) => {
    return (
        <>
            <h1>this is component b</h1>
            <h1>website ={props.appname} </h1>
            <D appname={props.appname} />
        </>
    )

}

export default B