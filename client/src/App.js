import Home from "./components/home/Home";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Products from "./components/products/Products";
import Register from "./components/register/Register";
import Login from './components/login/Login'
import {useState} from 'react'
function App() {
  const [flag,setFlag]=useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/products" element={flag?<Products/>:<Login setFlag={setFlag}/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login setFlag={setFlag}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
      