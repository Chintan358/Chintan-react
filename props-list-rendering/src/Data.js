import React, { useState, useEffect } from 'react'

const Data = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

        document.body.style.backgroundColor = colorArray[count]

    }, [count])

    const increementData = () => {
        setCount(count + 1)
    }

    const decreementData = () => {
        setCount(count - 1)
    }
    return (
        <>
            {/* <button onClick={() => {
                decreementData()
            }}>Decreement</button> */}
            <h1>{count}</h1>
            <button onClick={() => {
                increementData()
            }}>change data</button>
        </>
    )
}

export default Data