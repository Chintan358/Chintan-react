import React, { useEffect, useState } from 'react'
import SkewLoader from "react-spinners/SkewLoader";

const List = () => { 
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8001/std`).then((res) => {
            return res.json()
        }).then((data) => {
            setData(data)
            // console.log(data);
        })
    }, [])
    return (
        <>
            <table border={1} rules='all'>
                <th>Name</th>
                <th>Age</th>
                <th>Marks</th>
                <th>Class</th>
                {data.map((result) => {
                    return (
                        <>
                            <tr>
                                <td>{result.name}</td>
                                <td>{result.age}</td>
                                <td>{result.marks}</td>
                                <td>{result.class}</td>
                            </tr>
                        </>
                    )
                })}
            </table>

        </>
    )
}

export default List