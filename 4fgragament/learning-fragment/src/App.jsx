import 'bootstrap/dist/css/bootstrap.min.css'
import Title from './components/Title'
import Items from './components/Items'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput  from './components/FoodInput'
import { useState } from 'react'
function App() {

  let foodItems = ["Fruits", "Veges", "Sprouts"]

  let textStateArr  = useState("This text to show")
  let [textState, setTextState] = textStateArr


  
  const handleOnchange = (e)=>{
    // console.log(e.target.value)
    setTextState(e.target.value)
}
  return (
    <>
      <Container>
        <Title></Title>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodInput handleOnchange={handleOnchange}></FoodInput>
        <p>{textState}</p>
        <Items items={foodItems}></Items>
      </Container>

      <Container>
        <p>Above is the list of healthy food..</p>
      </Container>
    </>
  )
}

export default App
