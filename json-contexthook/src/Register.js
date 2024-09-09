import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Register = () => {
    const [registerForm, setregisterForm] = useState({ name: "", email: "" })
    const [registerError, setregisterError] = useState({})
    const [data, setdata] = useState([])
    const [index, setIndex] = useState(null)
    const submitForm = (e) => {
        e.preventDefault()

        let validate = {}
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (registerForm.name == '') {
            validate.name = 'please add name'
        }

        if (registerForm.email == '') {
            validate.email = 'please add email'
        } else if (!filter.test(registerForm.email)) {
            validate.email = 'please enter valid email'
        }
        setregisterError(validate)
        console.log(validate);

        if (Object.keys(validate).length == 0) {
            if (index == null) {
                axios.post(`http://localhost:8001/std`, { ...registerForm }).then(() => {
                    getData()
                    document.getElementById('name').value = ''
                    document.getElementById('email').value = ''
                })
            } else {
                axios.patch(`http://localhost:8001/std/${index}`, { ...registerForm }).then((reuslt) => {
                    getData()
                    document.getElementById('name').value = ''
                    document.getElementById('email').value = ''
                    setIndex(null)
                })
            }
        }
    }

    const changeData = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        setregisterForm({ ...registerForm, [name]: value })
        // console.log(registerForm);

    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8001/std/${id}`).then(() => {
            getData()
        })
    }

    const getData = () => {
        axios.get(`http://localhost:8001/std`).then((result) => {
            console.log(result.data);
            setdata(result.data)
        })
    }

    const udapteData = (result) => {
        document.getElementById('name').value = result.name
        document.getElementById('email').value = result.email
        setIndex(result.id)

    }
    useEffect(() => {
        getData()

    }, [])
    return (
        <>
            <form onSubmit={submitForm}>
                <label htmlFor="">Name</label>
                <input type="text" name='name' onChange={changeData} id='name' />
                <br />
                <span style={{ color: 'red' }}>{registerError.name ? registerError.name : ''}</span>
                <br />
                <label htmlFor="">Email</label>
                <input type="text" name='email' id='email' onChange={changeData} />
                <br />
                <span style={{ color: 'red' }}>{registerError.email ? registerError.email : ''}</span>
                <br />
                <input type="submit" value={index == null ? 'Add Data' : 'Update Data'} />

            </form>
            <table rules='all' border={1}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {data.map((result) => {
                    return (
                        <tr>
                            <td>{result.name}</td>
                            <td>{result.email}</td>
                            <td><button onClick={() => {
                                deleteData(result.id)
                            }}>delete</button>
                                <button onClick={() => {
                                    udapteData(result)
                                }}>Update</button>
                            </td>
                        </tr>
                    )
                })}
                {data.length == 0 && <>
                    <tr>
                        <td colSpan={3}>No Data Found</td>

                    </tr>
                </>}
            </table>
        </>
    )
}

export default Register