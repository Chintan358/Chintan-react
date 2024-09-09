import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Header from './Header'
import Slider from './Slider'
import Data from './Data';
import Mode from './Mode';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import Page from './Page';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import A from './component/A';
import List from './component/List';
import Sun from './component/Sun';
import Todo from './Todo';
import Ref from './component/Ref';
import Product from './component/Product';
import Parent from './ref/Parent';

function App() {



  return (
    <>
      <div className="App">
        {/* 
        <Product /> */}
        {/* <Parent /> */}
      </div>

      {/* <Sun /> */}
      {/* <Header />
      <List /> */}
      {/* <A /> */}


      {/* <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/contact/:id/:name'} element={<Contact />}></Route>
        <Route path={'/service'} element={<Service />}></Route>

        <Route path={'/page'} element={<Page />}>
          <Route path={'/page/page1'} element={<Page1 />}></Route>
          <Route path={'/page/page2'} element={<Page2 />}></Route>
          <Route path={'/page/page3'} element={<Page3 />}></Route>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
