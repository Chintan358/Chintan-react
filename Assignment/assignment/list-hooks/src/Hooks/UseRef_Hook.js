import React,{useRef,useState} from 'react'

const UseRef_Hook = () => {
    const input=useRef(null)
    const[text,setText]=useState(null)
    
    const adddata=()=>{
        console.log(input.current.value);
        setText(input.current.value)
        input.current.value=''
        input.current.focus()
    }
  return (
    <>
       <p>useref hook ane usestate no use in example</p>

       <center>
          <input type='text' ref={input}/>

          <button onClick={()=>{
             adddata()
          }}>click me</button>
          <h1>{text}</h1>
       </center>
    </>
  )
}

export default UseRef_Hook
