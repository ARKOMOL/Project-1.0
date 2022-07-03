import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './Pages/Shared/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Shared/Login/Login';
import SignUp from './Pages/Shared/Login/SignUp';
import Books from './Pages/Page/Books';
import Reviews from './Pages/Page/Reviews';
import Author from './Pages/Page/Author';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='/books' element ={<Books/>}/>
        <Route path ='/reviews' element ={<Reviews/>}/>
        <Route path ='/authors' element ={<Author/>}/>
        <Route path ='/about' element ={<About/>}/>
        <Route path ='/contact' element ={<Contact/>}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path ='/signup' element ={<SignUp/>}/>
     </Routes>
    </div>
  );
}

export default App;
