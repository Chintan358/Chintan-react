import { useState } from "react";
import FoodItem from "./FoodItem";

let Items = ({items})=>{

    let [activeItems,setActiveItems] = useState([])

    let onButtonClick = (item,event)=>{

        let newActiveItem = [...activeItems,item]
        setActiveItems(newActiveItem)

    }
   
    return(<ul className='list-group'>

        {items.map((item)=> <FoodItem key={item}  foodItem={item} bought={activeItems.includes(item)} handleBuyButton={(event)=>onButtonClick(item,event)}></FoodItem>)}
        
        </ul>);
    
}


export default Items;