import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.scss';
import { useState } from 'react';
import { useEffect } from "react";
import Services from "./Components/Services";
import Admin from "./Components/Admin";
import Signin from "./Components/Signin";
import Adminbooks from "./Components/Adminbooks";
import Userbooks from "./Components/Userbooks";

function App() {
const [lastUpdate, setLastUpdate] = useState("")

  return (
     <>
      <h1>Library</h1>
      <BrowserRouter>
        <nav>
            <Link className="nav-link" to="/">Public services</Link>
            <Link className="nav-link" to="/user">Reserve books</Link>
            <Link className="nav-link" to="/createuser">Sign in</Link>
            <Link className="nav-link" to="/admin">Administrate users</Link>
            <Link className="nav-link" to="/adminbooks">Administrate books</Link>
        </nav>  
        <Routes>
          <Route index element={<Services lastUpdate={lastUpdate}></Services>} />
          <Route path="/" element={<Services lastUpdate={lastUpdate}></Services>} />
          <Route path="/admin" element={<Admin lastUpdate={lastUpdate} setLastUpdate={setLastUpdate}></Admin>} />
          <Route path="/user" element={<Userbooks lastUpdate={lastUpdate} setLastUpdate={setLastUpdate}></Userbooks>} />
          <Route path="/createuser" element={<Signin lastUpdate={lastUpdate} setLastUpdate={setLastUpdate}></Signin>} />
          <Route path="/adminbooks" element={<Adminbooks lastUpdate={lastUpdate} setLastUpdate={setLastUpdate}></Adminbooks>} />
        </Routes>
      </BrowserRouter>  
    </>  
  );
}

export default App;
