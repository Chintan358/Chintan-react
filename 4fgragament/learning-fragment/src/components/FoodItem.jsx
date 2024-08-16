import styles from "./FoodItem.module.css"
let FoodItem = ({ foodItem }) => {

    const handeleBuyButtonclick = (foodItem) => {
        alert(`You bought ${foodItem}`)
        // Add logic to update the cart state here
    }
    //let {foodItem }= props

    return (<li className='list-group-item'>{foodItem}
        <button onClick={() => handeleBuyButtonclick(foodItem)} className={`${styles.button} btn btn-primary`}>Buy</button>
    </li>

    );

}

export default FoodItem