import logo from "./logo.svg";
import "./App.css";
import Register from "./Register";
import { Router, Route } from "react-router-dom";
import task from "./Task/Register";
import Login from "./Login";

function App() {
  return (
    <>
      {/* <Register/> */}
      <Register />
      {/* <Router>
        <Route path="/regsiter" component={Register} />
        <Route path="/login" component={Login} />
      </Router> */}
    </>
  );
}

export default App;
