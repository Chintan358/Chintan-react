import React, { useEffect } from 'react'
import AddTitle from './custom-hook/WebTitle'
const Home = () => {

    useEffect(() => {
        AddTitle('Home')
    }, [])
    return (
        <>
            <h1>Home</h1>

        </>
    )
}

export default Home