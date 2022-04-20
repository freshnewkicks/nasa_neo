import '../../App.css';
import React, { useState, useEffect, useRef } from "react";

<<<<<<< HEAD
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [neoData, setNeoData] = useState({});
    const [dateResults, setDateResults] = useState([])

    // useRef will persist - across all renders - much like a traditional variable
    // this is the Reactful way to save a stateless variable
=======
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
>>>>>>> bb88dc8c35e90c0a5c84356074e2063f066f581c

    let responseRef = useRef(null);
    let thisWeekRef = useRef([]);


    let thisWeek = []

    useEffect(  () => {
<<<<<<< HEAD
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

=======
        if (loading)
        {
            grabData()
        }
        else if (!loading)
        {
            setNeoData(resData)
        }
    }, [loading, weeklyArray])
>>>>>>> bb88dc8c35e90c0a5c84356074e2063f066f581c
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
<<<<<<< HEAD
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
=======
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
>>>>>>> bb88dc8c35e90c0a5c84356074e2063f066f581c
                </div>
            }
        </div>
    )
}

export default Home;