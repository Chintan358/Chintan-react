import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';

function App() {
  return (
   <>
    <Header/> 
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>

    </Routes>
   </>
  );
}

export default App;
