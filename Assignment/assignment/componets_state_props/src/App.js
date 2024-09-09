import logo from './logo.svg';
import './App.css';
import Home from './componets/Home';
import Props from './componets/Props';
const name='My_web_props '

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Home/>
       <Props webname={name}/>
      </header>

    </div>
  );
}

export default App;
