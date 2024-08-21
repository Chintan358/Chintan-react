import 'bootstrap/dist/css/bootstrap.min.css'
import Title from './components/Title'
import Items from './components/Items'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput  from './components/FoodInput'
import { useState } from 'react'
function App() {

  

  let textStateArr  = useState([])
  let [foodItems, setFoodState] = textStateArr


  
  const handleKeyDown = (e)=>{
    
    if(e.key=='Enter')
    {
      let newFoodItem = e.target.value
      e.target.value=""
      let newArr = [...foodItems,newFoodItem]
      setFoodState(newArr)
      
    }
    
}
  return (
    <>
      <Container>
        <Title></Title>
        
        <FoodInput handleKeyDown={handleKeyDown}></FoodInput>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <Items items={foodItems}></Items>
      </Container>

      <Container>
        <p>Above is the list of healthy food..</p>
      </Container>
    </>
  )
}

export default App
