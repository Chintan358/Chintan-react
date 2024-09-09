import React, { useState } from 'react'

const Sun = () => {
    const [mode, setMode] = useState('sun')
    const sunMoon = () => {
        mode == 'sun' ? setMode('moon') : setMode('sun')
    }
    return (
        <>
            <button id='btn' onClick={() => {
                sunMoon()
            }}>{mode == 'sun' ? 'Moon' : 'Sun'}</button>
            {mode == 'sun' && <>
                <img src="../sun.webp" alt="" />
            </>}

            {mode == 'moon' && <>
                <img src="../moon.jpg" alt="" />
            </>}

        </>
    )
}

export default Sun