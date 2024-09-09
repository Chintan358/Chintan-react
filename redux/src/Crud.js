import React from 'react'
import { AddData, DeleteData } from './Action'
import { useDispatch, useSelector } from 'react-redux'

export const Crud = () => {
    const dispatch = useDispatch()
    const crud = useSelector((result) => {
        console.log(result);
        return result.Crud
    })
    const insertData = () => {
        let data = document.getElementById('data').value
        dispatch(AddData(data))


    }
    return (
        <>

            <input type="text" id='data' />
            <button onClick={() => {
                insertData()
            }}>Add</button>

            {crud.map((res, i) => {
                return (
                    <>
                        <li key={i}>{res}</li>
                    </>
                )
            })}
        </>
    )
}
