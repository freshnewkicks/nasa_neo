import '../../App.css';
import React, { useState, useEffect, useRef } from "react";
import Home from '../Home/Home'

function Navbar( {navTitle, data, loadingState} ) {
    const [neoData, setNeoData] = useState(data)

    let neoRef = useRef();
    neoRef.current = data;

    useEffect( () => {
        {loadingState &&
            console.log('loading, please wait')
        }

        {!loadingState &&
            console.log('done!')
            console.log(loadingState)

        }
    }, [loadingState])

    return (
        <div>
            {!loadingState &&
            <nav className="bg-black text-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#2a2f96" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#e53935" d="M4.597,30H3c0,0,4.077-3.084,12.928-5.535c0,0,14.202-4.313,23.428-10.583C42.565,11.177,45.071,8.764,46,7c0,0-1.193,4.725-6.726,10.351C38.191,17.906,37.768,18.64,37,19c0.126-0.142-0.096-0.871,0-1c0,0-7.195,3.355-22.02,7.77C14.981,25.768,8.742,27.352,4.597,30z"/><path fill="#fafafa" d="M19.282 25.221l1.503.025-.771-1.835L19.282 25.221zM18.969 26.366l-.274.96.802.441-2.661-.004.826-.463 1.714-5.602-.935-.467h3.167l2.639 6.068.528.467H21.08l.528-.467-.528-.934H18.969zM29.12 23.374c.576.135 2.526 1.143 1.848 3.129 0 0-.841 2.476-5.435.998L25.021 28v-1.995l.512.499c0 0 3.492 1.321 3.474-.316-.005-.319-.603-.845-2.205-1.048 0 0-1.802-.053-1.781-2.128.008-.843.626-2.964 5.121-1.497l.464-.518-.011 1.963-.453-.448c0 0-2.661-.834-2.926-.008C26.934 23.381 28.316 23.185 29.12 23.374z"/><path fill="#e53935" d="M39.461,17.149c-1.06,1.224-3.203,2.847-4.899,4.11c0,0-13.626,8.805-19.033,12.769c0,0-4.167,2.72-6.529,6.972v-1.618c0,0,2.255-3.163,7.585-6.937C21.273,29.125,35.281,20.744,37,18L39.461,17.149z"/><path fill="#fafafa" d="M8.667 21.257L11.834 21.257 14.473 25.459 14.473 21.724 13.945 21.257 16.056 21.257 15.528 21.724 15.528 27.326 16.056 27.793 12.889 27.793 10.251 23.592 10.251 27.326 10.778 27.793 8.667 27.793 9.195 27.326 9.195 21.724zM34.44 25.275l1.62-.007-.87-1.919L34.44 25.275zM34.275 26.366l-.33.934.858.467-2.661-.004.826-.463 1.714-5.602-.935-.467h3.167l2.639 6.068.528.467h-3.694l.528-.467-.528-.934H34.275z"/><path fill="#fafafa" d="M33.596,30.256c-0.743-2.933-2.427-6.293-4.742-9.462c-4.81-6.582-10.901-10.274-13.578-8.232c-1.316,1.006-1.627,3.2-0.871,6.181c0.743,2.933,2.427,6.293,4.742,9.462c1.008,1.379,1.618,2.143,2.695,3.243l0.68,0.255c-1.064-1.09-2.119-2.324-3.119-3.693c-2.291-3.135-3.957-6.455-4.689-9.348c-0.72-2.844-0.453-4.918,0.753-5.839c0.459-0.351,1.029-0.518,1.681-0.518c2.95,0,7.598,3.412,11.451,8.684c2.291,3.135,3.957,6.455,4.689,9.348c0.72,2.844,0.453,4.918-0.753,5.839c-1.617,1.235-4.605,0.181-7.779-2.414l-0.22,0.225C26.889,35.903,29.162,37,30.9,37c0.708,0,1.326-0.181,1.825-0.564C34.041,35.433,34.35,33.237,33.596,30.256z"/><path fill="#fafafa" d="M22.158 30.091A0.435 1.058 0 1 0 22.158 32.207A0.435 1.058 0 1 0 22.158 30.091Z" transform="rotate(-43.348 22.157 31.15)"/><path fill="#fafafa" d="M27.5 7.389l.231 1.591c.011.073.044.14.097.193.053.052.12.087.193.097l1.59.23L28.02 9.731c-.073.011-.14.044-.193.097-.052.052-.087.12-.097.193l-.23 1.59-.231-1.591c-.011-.073-.044-.14-.097-.193-.053-.052-.12-.087-.193-.097l-1.59-.23 1.591-.231c.073-.011.14-.044.193-.097.052-.052.087-.12.097-.193L27.5 7.389zM18.5 14.389l.231 1.591c.011.073.044.14.097.193.053.052.12.087.193.097l1.59.23-1.591.231c-.073.011-.14.044-.193.097-.052.052-.087.12-.097.193l-.23 1.59-.231-1.591c-.011-.073-.044-.14-.097-.193-.053-.052-.12-.087-.193-.097l-1.59-.23 1.591-.231c.073-.011.14-.044.193-.097.052-.052.087-.12.097-.193L18.5 14.389zM19.5 35.389l.231 1.591c.011.073.044.14.097.193.053.052.12.087.193.097l1.59.23-1.591.231c-.073.011-.14.044-.193.097-.052.052-.087.12-.097.193l-.23 1.59-.231-1.591c-.011-.073-.044-.14-.097-.193-.053-.052-.12-.087-.193-.097l-1.59-.23 1.591-.231c.073-.011.14-.044.193-.097.052-.052.087-.12.097-.193L19.5 35.389zM38.5 28.389l.231 1.591c.011.073.044.14.097.193.052.052.12.087.193.097l1.59.23-1.591.231c-.073.011-.14.044-.193.097-.052.053-.087.12-.097.193l-.23 1.59-.231-1.591c-.011-.073-.044-.14-.097-.193-.052-.052-.12-.087-.193-.097l-1.59-.23 1.591-.231c.073-.011.14-.044.193-.097.052-.053.087-.12.097-.193L38.5 28.389zM36.5 33A.5.5 0 1 0 36.5 34 .5.5 0 1 0 36.5 33zM12.5 32A.5.5 0 1 0 12.5 33 .5.5 0 1 0 12.5 32zM9.5 30A.5.5 0 1 0 9.5 31 .5.5 0 1 0 9.5 30zM24.5 11A.5.5 0 1 0 24.5 12 .5.5 0 1 0 24.5 11zM20.5 18A.5.5 0 1 0 20.5 19 .5.5 0 1 0 20.5 18z"/></svg>
                        </span>
                        NEO API
                    </a>
                    <div className="flex md:order-2">
                        <button data-collapse-toggle="mobile-menu-3" type="button"
                                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-3" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                        </button>
                    </div>
                </div>
            </nav>
            }
        </div>


        );
}


export default Navbar;