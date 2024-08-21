import styles from "./FoodItem.module.css"
let FoodItem = ({ foodItem,bought,handleBuyButton}) => {

    // const handeleBuyButtonclick = (e) => {
    //     console.log(e);
    //     alert(`You bought ${foodItem}`)
    //     // Add logic to update the cart state here
    // }
    //let {foodItem }= props

    return (<li className={`list-group-item ${bought && "active"}`}>{foodItem}
        <button onClick={handleBuyButton} className={`${styles.button} btn btn-primary`}>Buy</button>
    </li>

    );

}

export default FoodItem