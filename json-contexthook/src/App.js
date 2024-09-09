import './App.css';
// import List from './List';
import Todo from './Todo';
import Register from './Register';
import Input from './todo/Input';
import List from './todo/List';
import TodoContext from './todo/TodoContext';
import Header from './cart/Header';
import Addtocart from './cart/Addtocart';
import CartContext from './cart/CartContext';
import Search from './Search';
import LocalStorage from './LocalStorage';
import Weather from './Weather';
import Myclass from './Myclass';
import React, { useState } from 'react';
import { Reducer } from './Reducer';
// import Context from './context/Context';
// import Child1 from './context/Child1';
// import Child2 from './context/Child2';
// import Child3 from './context/Child3';
// import Child4 from './context/Child4';

function App() {
  const [app, setApp] = useState('Myweb')
  return (
    <div className="App">
      {/* <Context>
        <Child1 />
        <Child2 />
        <Child3 />
        <Child4 />
      </Context> */}
      {/* <TodoContext>

        <Input />
        <List />
      </TodoContext> */}

      {/* <CartContext>
        <Header />
        <Addtocart />
      </CartContext> */}
      {/* <Register /> */}
      {/* <LocalStorage /> */}
      {/* <Weather /> */}
      {/* <button onClick={() => {
        setApp('new-app')
      }}>change name</button>
      <Myclass name={app} /> */}
      <Reducer />
    </div>
  );
}


export default App;
