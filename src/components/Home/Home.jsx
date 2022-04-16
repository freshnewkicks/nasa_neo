import '../../App.css';
import React, { useState, useEffect, useRef } from "react";

function Home() {

    const [loading, setLoading] = useState(true);
    const [neoData, setNeoData] = useState({});
    const [weeklyArray, setWeeklyArray] = useState([])

    let dateResults = [];

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

    // Note about fetch options:
    // no-cors mode won't magically make our CORS request work
    // One of the side effects of no-cors is that it tells frontend JS code from
    // seeing contents of the response body and headers under all circumstances

    // Browsers by default block frontend code from accessing resources cross-origin.
    // If Access-Control-Allow-Origin is in a response, then browsers relax that blocking allow
    // code to access the response




    function grabData() {
            fetch(`https://nasa-api-server.herokuapp.com/`)
            .then( async(res) => {
                resData =  await res.json();


                Object.entries(resData.near_earth_objects).forEach(h => {
                    weeklyArray.push(h)
                })

                setWeeklyArray(weeklyArray) // sets to very first key in the array

                setLoading(false)

            }).catch( (err) => {
            console.log(err)
        })
    }

    let thisWeek = []

    useEffect(  () => {
        if (loading)
        {
            grabData()
        }
        else if (!loading)
        {
            setNeoData(resData)
        }
    }, [loading, weeklyArray])
    return (
        <div>
            {loading &&
                <div>
                    LOADING
                </div>
            }
            {!loading &&
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    {thisWeek}
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {
                                    weeklyArray.map((item, ind) => (<th key={ind} scope="col" className="px-6 py-3">{item[0]}</th>))
                                }
                            </tr>

                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">

                                </th>
                                <td className="px-6 py-4">

                                </td>
                                <td className="px-6 py-4">

                                </td>
                                <td className="px-6 py-4">

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Home;