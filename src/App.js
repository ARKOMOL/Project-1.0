import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './Pages/Shared/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Shared/Login/Login';
import SignUp from './Pages/Shared/Login/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path ='/signup' element ={<SignUp/>}/>
     </Routes>
    </div>
  );
}

export default App;
