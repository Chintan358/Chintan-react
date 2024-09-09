import { combineReducers } from 'redux'
import CartReducer from './AddToCart'
import Crud from './Crud';
const Reducers = combineReducers({ CartReducer, Crud })

export default Reducers;