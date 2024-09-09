import React,{useEffect,useState} from 'react'

const UseEffect_Hook = () => {
    const [count,setcount]=useState(0)
    const[count2,setcountt]=useState(0)
    useEffect(()=>{
     if(count>4){
        document.body.style.backgroundColor='yellow'
     }
    },[count])

    useEffect(()=>{
        if(count2>10){
            document.body.style.backgroundColor='pink'
        }
    },[count2])
  return (
    <>
     <p> UseEffect_Hook in example </p>
       
       <button onClick={()=>{
         setcount(count+1)
       }}>Increment</button>

<button onClick={()=>{
         setcount(count-1)
       }}>Decrement</button>
       <h1>{count}</h1>

       <button onClick={()=>{
         setcountt(count2+1)
       }}>Increment</button>

<button onClick={()=>{
         setcountt(count2-1)
       }}>Decrement</button>
       <h1>{count2}</h1>
    </>
  )
}

export default UseEffect_Hook