import React,{useContext} from 'react'
import{A} from './Create_use_hook_01'

const Create_use_hook_02 = () => {
    const [data]=useContext(A)
  return (
   <>
    <h1>i am Create2 <b style={{color:'red'}}>data</b></h1>
   </>
  )
}

export default Create_use_hook_02