import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Serive from './Serive';
import Memo from './Memo';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/service' element={<Serive />}></Route>

        </Routes> */}
        <Memo />
      </BrowserRouter>

    </>
  );
}

export default App;
