import React,{createContext,useState} from 'react'
import Create_use_hook_02 from './Create_use_hook_02'
import Create_use_hook_03 from './Create_use_hook_03'


 export  const A=createContext()
const Create_use_hook_01 = () => {
 
   const hook=useState('YES')
  return (
    <>
     <p> Create-context and use-context in example </p>

     <A.Provider value={hook}>
       <Create_use_hook_02/>
       <Create_use_hook_03/>
     </A.Provider>
    </>
  )
}

export default Create_use_hook_01