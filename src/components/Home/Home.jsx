import '../../App.css';
import React, { useState, useEffect, useRef } from "react";

    // useRef will persist - across all renders - much like a traditional variable
    // this is the Reactful way to save a stateless variable
function Home() {
    const [loading, setLoading] = useState(true)
    const [neoData, setNeoData] = useState({})
    // recent date (7 day)

    // Note about fetch options:
    // no-cors mode won't magically make our CORS request work
    // One of the side effects of no-cors is that it tells frontend JS code from
    // seeing contents of the response body and headers under all circumstances

    // Browsers by default block frontend code from accessing resources cross-origin.
    // If Access-Control-Allow-Origin is in a response, then browsers relax that blocking allow
    // code to access the response

    let responseRef = useRef(null)

    useEffect(  () => {

        if (loading) {
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
            console.log(neoData)
        }
    }, [loading])

    return (
        <div>
            {loading &&
                <div>
                    LOADING
                </div>
            }
            {!loading &&
                <div className="parent w-full flex justify-center items-center align-center">
                    <div className="w-3/4 relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Hazardous?
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(neoData.near_earth_objects).sort().reverse().map( (i, k) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                                                <th key={k} scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                    {i}
                                                </th>
                                                <td className="text-center">
                                                    {
                                                        neoData.near_earth_objects[i][0].name
                                                    }
                                                </td>
                                                <td className="text-center">
                                                    {
                                                        neoData.near_earth_objects[i][0].id
                                                    }
                                                </td>
                                                <td className="text-center">
                                                    {
                                                        neoData.near_earth_objects[i][0].is_potentially_hazardous_asteroid ? <p className="text-red-700 animate-pulse">Yes</p> : <p className="text-md">No</p>
                                                    }
                                                </td>
                                            </tr>

                                        )
                                    })

                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            }
        </div>
        )
    }

export default Home;