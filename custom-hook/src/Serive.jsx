import React, { useEffect } from 'react'
import AddTitle from './custom-hook/WebTitle'

const Serive = () => {
    useEffect(() => {
        AddTitle('Service')
    }, [])
    return (
        <>
            <h1>service</h1>

        </>
    )
}

export default Serive