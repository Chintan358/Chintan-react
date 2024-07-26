import React, { useState } from "react";

const Registration = ()=>{

    const [fullName, setFullname] = useState({
        fname:"",
        lname:"",
        email:"",
        phno:""
    })

    const getData = (event)=>{
        const {name,value} = event.target

        setFullname((prevValue)=>{
            return{
                ...prevValue,[name]:value
            }
        })
    }


    return(<>

        <h1>Student Registration</h1>
        <h2>{fullName.fname}</h2>
        <h2>{fullName.lname}</h2>
        <h2>{fullName.email}</h2>
        <h2>{fullName.phno}</h2>
         <form>
            <input type="text" name="fname" onChange={getData}/>
            <input type="text" name="lname" onChange={getData}/>
            <input type="text" name="email" onChange={getData}/>
            <input type="text" name="phno" onChange={getData}/>
            <button type="submit">Add</button>
         </form>   
    </>)
}

export default Registration