import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  let foodItems = ["Fruits","Veges","Sprouts"]
  //let foodItems = []

  // if(foodItems.length===0)
  // {
  //   return <h1>I am Still Hungry</h1>
  // }

  let emptyMessage = foodItems.length===0?<h3>I am still hungry</h3> : null
  return (
    <>
      <h1>Healthy Foods</h1>
      {emptyMessage}
      <ul className='list-group'>
        {foodItems.map((item)=> <li key={item} className='list-group-item'>{item}</li>)}

      </ul>
    </>
  )
}

export default App
