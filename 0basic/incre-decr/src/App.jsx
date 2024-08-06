import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  var [number, setNum]= useState(0)
  const IitemEvent = ()=>{

      number++
        setNum(number)
  }

  const DitemEvent = ()=>{

      if(number < 1)
      {
        return alert("not allowed less then 0")
      }
       number--
      setNum(number)
}

  return (
      <>
        <div className='main_div'>
          <div className='center_div'>
            <h1>{number}</h1>

            <div className='btndiv'>
            <button onClick={IitemEvent}>Incr</button>
            <button onClick={DitemEvent}>Decr</button>
            </div>
            
          </div>
        </div>
      </>
  );
}

export default App;
