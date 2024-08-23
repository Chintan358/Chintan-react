import style from './App.module.css'
import Display from './Components/Display'
import ButtonContainer from './Components/ButtonContainer'
import { useState } from 'react'
function App() {

  const [calValue, setCalValue] = useState("")
  const onButtonclick = (buttontext) => {
    if (buttontext === 'C') {
      setCalValue("")
    }
    else if (buttontext === '=') {
      const result = eval(calValue)
      setCalValue(String(result))
    }
    else {
      const newDisplayValue = calValue + buttontext
      setCalValue(newDisplayValue)
    }
  }

  return (
    <>
      <div className={style.calculator}>
        <Display displayCalValue={calValue}></Display>
        <ButtonContainer onButtonclick={onButtonclick}></ButtonContainer>
      </div>
    </>
  )
}

export default App
