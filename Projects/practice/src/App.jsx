import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [count, setCount] = useState([])

  let myfun = ()=>{
    
   
    axios.get("https://dummy-json.mock.beeceptor.com/users").then(data=>{

      
      
      setCount(data.data)
      

    }).catch(err=>{
      console.log(err);
      
    })

  }

  return (
    <>
     <button onClick={()=>myfun()}>Click</button>
     <table>
     {count.map((item)=><tr><td>{item.id}</td><td>{item.name}</td><td><img src={item.photo} alt={item.photo}></img></td></tr> )}
     </table>
    </>
  )
}

export default App
