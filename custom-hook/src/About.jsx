import React, { useEffect } from 'react'
import AddTitle from './custom-hook/WebTitle'

const About = () => {
    useEffect(() => {
        AddTitle('About')
    }, [])
    return (
        <><h1>About</h1></>
    )
}

export default About