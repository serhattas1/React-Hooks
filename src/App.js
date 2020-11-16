import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";
import {BrowserRouter,Route} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/card/:user" component={Card}/>
    </div>
    </BrowserRouter>
  );
 
}

export default App;
