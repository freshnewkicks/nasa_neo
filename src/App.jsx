import './App.css';
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";


function App() {
    return (
        <div>
            <Nav navTitle="NASA API"/>
            <Home />
        </div>
    )
}


export default App;
