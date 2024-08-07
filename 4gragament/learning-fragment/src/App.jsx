import 'bootstrap/dist/css/bootstrap.min.css'
import Title from './components/Title'
import Items from './components/Items'
import ErrorMsg from './components/ErrorMsg'
function App() {
  
    let foodItems = ["Fruits","Veges","Sprouts"]
      return ( <>
          <Title></Title>
          <ErrorMsg items={foodItems}></ErrorMsg>
          <Items items={foodItems}></Items>
        </>
      )
}

export default App
