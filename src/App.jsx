import './App.css';
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";


function App() {
    let planet_img = 'f';
    const [planet, setPlanet] = useState('jupiter')

    useEffect( () => {
        planet_img = 'planet'
    }, [planet_img])

    const updateState = () => {
        setPlanet(["Neptune", "Venus"])
    }

    return (
        <div>
            <Nav navTitle="NASA API"/>
        </div>
    )
}


export default App;
