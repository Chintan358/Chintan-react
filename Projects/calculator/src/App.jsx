import style from './App.module.css'
import Display from './Components/Display'
import ButtonContainer from './Components/ButtonContainer'
function App() {
  

  return (
    <>
      <div className={style.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
      </div>
    </>
  )
}

export default App
