import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/dashboard" exact element={<Dashboard/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
