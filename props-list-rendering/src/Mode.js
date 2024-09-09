import React, { useEffect, useState } from 'react'

const Mode = () => {
    const [mode, setMode] = useState('light')
    return (
        <>
            <button onClick={() => {
                setMode(mode == 'dark' ? 'light' : 'dark')
            }}>{mode == 'dark' ? 'light' : 'dark'}</button>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, asperiores?</p>
        </>
    )
}

export default Mode