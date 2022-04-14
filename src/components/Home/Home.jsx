import '../../App.css';
import React, { useState, useEffect, useRef } from "react";

function Home() {

    const [planetName, setPlanet] = useState(`not this`);
    const [loading, setLoading] = useState(true);
    const [neoData, setNeoData] = useState({});

    const myElements = useRef();
    const planetNameRef = useRef();
    const neoDataRef = useRef();

    let dateResults = [];
    let neoResults = [];

    // recent date (7 day)
    function getLastWeekDates() {
        for (let i = 0; i < 7; i++) {
            let date = new Date();
            date.setDate(date.getDate() - i);
            let formattedDate = date.toISOString().split('T')[0];
            dateResults.unshift(formattedDate);
        }
    }
    getLastWeekDates()

    let resData;
    function grabData() {
            fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateResults[0]}&end_date=${dateResults[6]}&api_key=REDACTED`)
            .then( async(res) => {

                resData =  await res.json();
                myElements.current = resData;
                for (let i = 0; i < 7; i++) {
                    console.log(myElements.current.near_earth_objects[dateResults[i]][0])
                }

                setLoading(false)

            }).catch( (err) => {
            console.log(err)
        })
    }


    useEffect(  () => {
        if (loading)
        {
            // Do Nothing
            grabData()
        }
        else if (!loading)
        {
            setNeoData(myElements.current.near_earth_objects[dateResults[0]][0])
        }
    }, [loading])

    const handleClick = () => {
        grabData()
    }

    return (
        <div>
            {loading &&
                <div>
                    LOADING
                </div>
            }
            {!loading &&
                <div className="flex flex-col justify-center items-center align-center">
                    <div
                        className="p-4 w-9/12 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                Recent NEO Data
                            </h5>
                            <a href="/#"
                               className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {dateResults.map(date => {
                                    return (
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {date}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        email@windster.com
                                                    </p>
                                                </div>
                                                <div
                                                    className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    $320
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;