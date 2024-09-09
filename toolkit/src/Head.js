import React from 'react'
import { useSelector } from 'react-redux'
const Head = () => {

    const cart = useSelector((result) => {
        console.log(result);
        return result.mycart;

    })
    return (
        <>
            <h1>{cart}</h1>


        </>
    )
}

export default Head