import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Contact = () => {
    const navigate = useNavigate()
    const { id, name } = useParams()
    const gotoHome = () => {
        navigate('/')
    }

    useEffect(() => {
        console.log(name);

    })
    return (
        <>
            <h1>this is Contact page</h1>
            <button onClick={() => {
                gotoHome()
            }}>GO TO HOME</button>
        </>
    )
}

export default Contact