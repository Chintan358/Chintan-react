import React from 'react'
import { Outlet } from 'react-router-dom'
import Slider from './Slider'
const Page = () => {
    return (
        <>
            <Slider />
            <Outlet />
        </>
    )
}

export default Page