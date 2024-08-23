import style from './ButtonContainer.module.css'

let ButtonContainer = ({ onButtonclick }) => {

    const btnNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

    return <>
        <div className={style.buttonContainer}>

            {btnNames.map((item) => <button className={style.button} onClick={() => onButtonclick(item)}>{item}</button>)}



        </div>
    </>
}

export default ButtonContainer