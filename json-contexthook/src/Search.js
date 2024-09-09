import React, { useState } from 'react'

const Search = () => {
    let s = [
        { rollNo: 1, age: 20, name: "dixit 1" },
        { rollNo: 2, age: 20, name: "dixit 2" },
        { rollNo: 3, age: 20, name: "dixit 3" },
        { rollNo: 4, age: 20, name: "dixit 4" },
        { rollNo: 5, age: 20, name: "dixit 5" },
        { rollNo: 6, age: 20, name: "dixit 6" },
        { rollNo: 7, age: 20, name: "dixit 7" },
        { rollNo: 8, age: 20, name: "dixit 8" },
        { rollNo: 9, age: 20, name: "dixit 9" },
        { rollNo: 10, age: 20, name: "hitesh 10" },
        { rollNo: 11, age: 20, name: "hitesh 11" },
        { rollNo: 12, age: 20, name: "hitesh 12" },
        { rollNo: 13, age: 20, name: "hitesh 13" },
        { rollNo: 14, age: 20, name: "hitesh 14" },
        { rollNo: 15, age: 20, name: "hitesh 15" },
        { rollNo: 16, age: 20, name: "hitesh 16" },
        { rollNo: 17, age: 20, name: "maharshi 17" },
        { rollNo: 18, age: 20, name: "maharshi 18" },
        { rollNo: 19, age: 20, name: "maharshi 19" },
        { rollNo: 20, age: 20, name: "maharshi 20" },
        { rollNo: 21, age: 20, name: "maharshi 21" },
        { rollNo: 22, age: 20, name: "maharshi 22" },
        { rollNo: 23, age: 20, name: "maharshi 23" },
        { rollNo: 24, age: 20, name: "maharshi 24" },
        { rollNo: 25, age: 20, name: "Student 25" },
        { rollNo: 26, age: 20, name: "Student 26" },
        { rollNo: 27, age: 20, name: "Student 27" },
        { rollNo: 28, age: 20, name: "Student 28" },
        { rollNo: 29, age: 20, name: "Student 29" },
        { rollNo: 30, age: 20, name: "Student 30" },

    ]
    const [students, setStudents] = useState(s)

    const searchData = (e) => {

        if (e.target.value == '') {
            setStudents(s)
        } else {
            const searchStd = students.filter((std) => {

                if (std.name.indexOf(e.target.value) > -1) {
                    return true
                }
            })
            setStudents(searchStd)
        }

    }
    return (
        <>
            <input type="search" className='mt-5 mb-5' onChange={searchData} />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">RollNo</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((std, i) => {
                        return (
                            <>
                                <tr key={i}>
                                    <th scope="row">{i}</th>
                                    <td>{std.name}</td>
                                    <td>{std.rollNo}</td>
                                    <td>{std.age}</td>
                                </tr>
                            </>
                        )
                    })}
                    {students.length == 0 && <>
                        <tr>
                            <td colSpan={4}>No data found</td>
                        </tr>
                    </>}
                </tbody>
            </table>

        </>
    )
}

export default Search