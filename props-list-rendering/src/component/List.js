import React, { useState } from 'react'

const List = () => {

    let std = [
        { name: "Fenil", age: 20, marks: 50 },
        { name: "Anil", age: 30, marks: 50 },
        { name: "Jay", age: 50, marks: 60 }
    ]
    const [student, setStudent] = useState(std)

    const addMarks = () => {

        let newMarks = student.map((res) => { 
            return { name:res.name , age: res.age, marks: res.marks+10}
        })
           setStudent(newMarks)
    }
    return (
        <> 
            <button onClick={
                () => { 
                    addMarks()
                }
            }>Add 10 marks</button>
            <table border={3} rules='all'>
                <tbody>
                         <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                </tr> 
                {student.map((result, index) => { 
                    return (
                        <>
                            <tr key={index}>
                                <td>{result.name}</td>
                                <td>{result.age}</td>
                                <td>{result.marks }</td>
                          </tr>
                        </>
                             )
                })}
                </tbody>
              
           
            </table>
        </>
    )
}

export default List