import FoodItem from "./FoodItem";

let Items = ({items})=>{

   
    return(<ul className='list-group'>

        {items.map((item)=> <FoodItem key={item}  foodItem={item}></FoodItem>)}
        
        </ul>);
    
}


export default Items;