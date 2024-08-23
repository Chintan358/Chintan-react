import style from './Display.module.css'
let Display = ({ displayCalValue }) => {
    return <input className={style.display} type="text" value={displayCalValue} readOnly />

}

export default Display