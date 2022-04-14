import '../../App.css';
import React, { useState, useEffect, useRef } from "react";

function Home() {
    const [planetName, setPlanet] = useState(`not this`);
    const [loading, setLoading] = useState(true);
    const myElements = useRef();
    const planetNameRef = useRef();

    let resData;
    function grabData() {
         fetch('https://api.nasa.gov/planetary/apod?api_key=<redacted>')
            .then( async(res) => {
                resData =  await res.json()
                console.log(resData)
                myElements.current = resData;
                setLoading(!loading)
            }).catch( (err) => {
            console.log(err)
        })
    }


    useEffect(  () => {
        grabData()
    }, [])

    const handleClick = () => {
        setPlanet(planetNameRef.current.value)
    }

    return (
        <div>
            {loading &&
                <div>
                    LOADING
                </div>
            }
            {!loading &&
                <div>
                    <input ref={planetNameRef} />
                    <h1>{myElements.current.copyright}</h1>
                    <button onClick={handleClick}>Click Me</button>
                </div>
            }
        </div>
    )
}

export default Home;