import React, { useEffect } from 'react'
import AddTitle from './custom-hook/WebTitle'

const Contact = () => {

    useEffect(() => {
        AddTitle('Contact')
    }, [])
    return (
        <>
            <h1>contact page</h1>
        </>
    )
}

export default Contact