import React,{useContext} from 'react'
import {A} from './Create_use_hook_01'

const Create_use_hook_03 = () => {
    const [data,update]=useContext(A)
  return (
   <>
    <h1>hii am create3 <b style={{color:'red'}}>{data}</b></h1>

    <button onClick={()=>{
        update('YES')
    }}>YES
    </button>

    <button onClick={()=>{
        update('NAY')
    }}>NAY
    </button>
   </>
  )
}

export default Create_use_hook_03