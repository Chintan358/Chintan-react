import 'bootstrap/dist/css/bootstrap.min.css'
import Title from './components/Title'
import Items from './components/Items'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
function App() {

  let foodItems = ["Fruits", "Veges", "Sprouts"]
  return (
    <>
      <Container>
        <Title></Title>
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
