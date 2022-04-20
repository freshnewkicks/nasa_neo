import '../../App.css';
import React, { useState, useEffect, useRef } from "react";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [neoData, setNeoData] = useState({});
    const [dateResults, setDateResults] = useState([])

    // useRef will persist - across all renders - much like a traditional variable
    // this is the Reactful way to save a stateless variable

    let responseRef = useRef(null);
    let thisWeekRef = useRef([]);



    useEffect(  () => {
        if (loading) {
            for (let i = 0; i < 7; i++) {
                let date = new Date();
                date.setDate(date.getDate() - i);
                let formattedDate = date.toISOString().split('T')[0];
                thisWeek.push(formattedDate);
                thisWeekRef.current = thisWeek;
            }

            fetch('https://nasa-api-server.herokuapp.com')
                .then( async(res) => {
                     let data = await res.json()
                    setLoading(false)
                    setNeoData(data)
                })
                .catch( (err) => {
                    console.log(err)
                })
        }

        if (!loading) {
            console.log('done loading')
            console.log(neoData)
        }
    }, [])

    const thisWeek = thisWeekRef.current;

    return (
        <div>
            {loading &&
                <div>
                    LOADING
                </div>
            }
            {!loading && neoData[0] === "error" &&
                <div>
                test
                </div>
            }
            {!loading &&
                <div className="flex flex-coljustify-center items-center align-center">
                    <div
                        className="w-full p-4 w-9/12 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                            <div className="flex w-full relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <th scope="col" className="px-6 py-3">
                                                Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                ID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                    {thisWeek.map((i, k) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th key={k} scope="col" className="px-6 py-3">{i}</th>
                                            </tr>
                                        )
                                    })}

                                    {
                                        Object.values(neoData.near_earth_objects)
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;