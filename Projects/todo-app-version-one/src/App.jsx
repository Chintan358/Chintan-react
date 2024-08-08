import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Items from "./components/Items";

function App() {
  
      let allItems = [{
        name:"Assignment",
        date:"10/08/2024"
      },{
        name:"Project",
        date:"12/08/2024"
      },
      {
        name:"Exam",
        date:"15/08/2024"
      }]

      return (<center class='todo-container'>
        <AppName/>
        <AddTodo/>
        <Items allItems={allItems}></Items>
        
       

     
      </center>);
  
  
}

export default App
