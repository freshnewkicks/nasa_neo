import Nav from '../Nav/Navbar';
import RecentObjectsTable from '../DataTables/RecentObjectsDT';
import React, {useEffect, useState} from 'react';
import TextWithVDivider from '../TextWithDivider/TextWithDivider';

// useRef will persist - across all renders - much like a traditional variable
// this is the Reactful way to save a stateless variable

function Home() {
  const [neoData, setNeoData] = useState({});
  const [loading, setLoading] = useState(true);
  const textOptions = {
    currentTitle: 'Test',
  };
  // Note about fetch options:
  // no-cors mode won't magically make our CORS request work
  // One of the side effects of no-cors is that it tells frontend JS code from
  // seeing contents of the response body and headers under all circumstances

  // eslint-disable-next-line max-len
  // Browsers by default block frontend code from accessing resources cross-origin.
  // eslint-disable-next-line max-len
  // If Access-Control-Allow-Origin is in a response, then browsers relax that blocking allow
  // code to access the response
  useEffect( () => {
    if (loading) {
      fetch(process.env.REACT_APP_FETCH_URL)
          .then( async (res) => {
            const data = await res.json();
            setLoading(false);
            setNeoData(data);
          })
          .catch( (err) => {
            console.log(err);
          });


      console.log(textOptions);
    }
    if (!loading) {
      console.log(neoData);
    }
  }, [loading]);

  return (
    <>
      <Nav data={neoData.near_earth_objects} loadingState={loading}/>
      {loading &&
                <div className="parent w-full h-full m-auto flex flex-col
                justify-center items-center align-center">
                  {/* eslint-disable-next-line max-len */}
                  <svg className="animate-pulse" xmlns="" viewBox="0 0 100 100" width="100px" height="100px"><path fill="#c8ede6" d="M87.2,55.6c0.3-0.6,0.6-1.3,0.8-1.9c2.6-7.8-1.3-17.1-9.7-19.3c-0.9-11.4-8.9-19.2-17.9-20.5 c-10.3-1.5-19.8,5-23,15.5c-3.8-1.3-7.5-1.2-11,0.9c-1.6,0.7-3,1.8-4.3,3.2c-1.9,2.1-3.1,4.7-3.7,7.5c-0.7,0.1-1.5,0.2-2.2,0.5 c-4,1.4-6.6,4.4-7.3,8.9c-0.4,2.8,0.4,5.6,0.9,6.7c1.9,4.5,6.4,7,11,6.3c0.2,0,0.6,0.1,0.8,0.2c0.2,7.1,3.7,13.4,8.9,17 c8.3,5.8,19,4,25.8-3.9c2.9,3,6.3,4.4,10.4,3.9c4-0.5,7.1-2.7,9.4-6.3c1.1,0.3,2.1,0.7,3.1,0.8c4,0.4,7.3-1.2,9.7-4.8 c0.1-0.1,0.2-0.2,0.3-0.3c0.3-0.8,0.7-1.6,1-2.4c0.2-1.2,0.4-2.4,0.4-3.6C90.7,60.5,89.4,57.5,87.2,55.6z"/><path fill="#fdfcef" d="M41.3,34.4c0,0,11.7,0,11.8,0c2.7,0,4.9-2.2,4.9-4.9c0-2.4-1.7-4.3-3.9-4.8c0-0.2,0-0.4,0-0.6 c0-2.8-2.3-5.1-5.1-5.1c-1.7,0-3.1,0.8-4,2c-0.2-3.1-3-5.5-6.3-5.1c-2.4,0.3-4.3,2.1-4.8,4.5c-0.1,0.8-0.1,1.5,0,2.2 c-0.6-0.7-1.5-1.1-2.6-1.1c-1.9,0-3.4,1.4-3.5,3.3c-0.8-0.2-1.8-0.2-2.7,0.2c-1.8,0.7-3.1,2.4-3.2,4.4c-0.1,2.8,2.1,5.1,4.9,5.1 c0.2,0,0.9,0,1.1,0h10.2"/><path fill="#472b29" d="M53.1,34.9H41.3c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h11.8c2.4,0,4.4-2,4.4-4.4c0-2.1-1.5-3.9-3.5-4.3 c-0.3-0.1-0.4-0.3-0.4-0.6c0-0.2,0-0.4,0-0.6c0-2.5-2-4.6-4.6-4.6c-1.4,0-2.8,0.7-3.6,1.8c-0.1,0.2-0.3,0.2-0.5,0.2 c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-1.4-0.8-2.7-1.8-3.5c-1.1-0.9-2.5-1.3-3.9-1.1c-2.2,0.3-4,1.9-4.4,4.1c-0.1,0.7-0.1,1.3,0,2 c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4,0.1-0.6-0.1c-0.6-0.6-1.4-1-2.2-1c-1.6,0-2.9,1.2-3,2.8c0,0.1-0.1,0.3-0.2,0.4 c-0.1,0.1-0.3,0.1-0.4,0.1c-0.8-0.2-1.6-0.1-2.4,0.2c-1.7,0.6-2.8,2.2-2.9,3.9c0,1.2,0.4,2.4,1.2,3.2c0.8,0.9,2,1.3,3.2,1.3h11.3 c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5H26.9c-1.5,0-2.9-0.6-3.9-1.7c-1-1.1-1.6-2.5-1.5-4c0.1-2.1,1.5-4.1,3.5-4.8 c0.8-0.3,1.6-0.4,2.5-0.3c0.4-1.8,2-3.2,3.9-3.2c0.7,0,1.4,0.2,1.9,0.5c0-0.4,0-0.8,0.1-1.2c0.5-2.6,2.6-4.6,5.2-4.9 c1.7-0.2,3.3,0.3,4.6,1.3c1,0.8,1.7,2,2,3.2c1-0.9,2.3-1.4,3.7-1.4c3.1,0,5.6,2.5,5.6,5.6c0,0.1,0,0.2,0,0.2 c2.3,0.7,3.8,2.8,3.8,5.2C58.5,32.5,56.1,34.9,53.1,34.9z"/><path fill="#fdfcef" d="M38.5,23.7c-1.8-0.1-3.4,1.1-3.5,2.8c0,0.2,0,0.4,0,0.6c-0.3-0.4-0.9-0.7-1.5-0.7c-1.1-0.1-2,0.6-2.2,1.6 c-0.2-0.1-0.4-0.1-0.6-0.1c-1.6-0.1-2.9,1-3,2.4"/><path fill="#472b29" d="M27.8,30.6C27.8,30.6,27.8,30.6,27.8,30.6c-0.2,0-0.3-0.1-0.3-0.3c0.1-1.6,1.6-2.8,3.3-2.7 c0.1,0,0.3,0,0.4,0.1c0.3-1,1.3-1.6,2.4-1.6c0.4,0,0.8,0.2,1.2,0.4c0,0,0,0,0-0.1c0.1-1.8,1.8-3.2,3.7-3c0.1,0,0.2,0.1,0.2,0.3 s-0.1,0.3-0.3,0.2c-1.7-0.1-3.1,1-3.2,2.6c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2-0.1,0.3s-0.2,0-0.3-0.1c-0.3-0.4-0.8-0.6-1.3-0.6 c-1,0-1.8,0.6-1.9,1.4c0,0.1,0,0.1-0.1,0.2c-0.1,0-0.1,0.1-0.2,0c-0.2-0.1-0.4-0.1-0.6-0.1C29.4,28,28.1,29,28,30.3 C28,30.5,27.9,30.6,27.8,30.6z"/><path fill="#fdfcef" d="M55.1,25.3c-1.7-0.8-3.7-0.2-4.4,1.3c-0.1,0.2-0.2,0.4-0.2,0.6"/><path fill="#472b29" d="M50.5,27.4C50.5,27.4,50.5,27.4,50.5,27.4c-0.2,0-0.3-0.2-0.2-0.3c0-0.2,0.1-0.4,0.2-0.6 c0.8-1.6,2.9-2.2,4.7-1.4c0.1,0.1,0.2,0.2,0.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.1c-1.6-0.7-3.4-0.2-4.1,1.1c-0.1,0.2-0.1,0.3-0.2,0.5 C50.7,27.3,50.6,27.4,50.5,27.4z"/><path fill="#fff" d="M17.9,57h-10c-0.3,0-0.5-0.2-0.5-0.5S7.6,56,7.9,56h10c0.3,0,0.5,0.2,0.5,0.5S18.2,57,17.9,57z M21.3,56.5 c0-0.3-0.2-0.5-0.5-0.5h-1.4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.4C21.1,57,21.3,56.8,21.3,56.5z M25.3,56.5 c0-0.3-0.2-0.5-0.5-0.5h-2.5c-0.3,0-0.5,0.2-0.5,0.5S22,57,22.3,57h2.5C25.1,57,25.3,56.8,25.3,56.5z M25.3,58.5 c0-0.3-0.2-0.5-0.5-0.5h-9.6c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h9.6C25.1,59,25.3,58.8,25.3,58.5z M14,58.5 c0-0.3-0.2-0.5-0.5-0.5h-0.6c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h0.6C13.8,59,14,58.8,14,58.5z M11.6,58.5 c0-0.3-0.2-0.5-0.5-0.5H9.7c-0.3,0-0.5,0.2-0.5,0.5S9.4,59,9.7,59h1.5C11.4,59,11.6,58.8,11.6,58.5z M20.7,54.5 c0-0.3-0.2-0.5-0.5-0.5h-5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h5C20.5,55,20.7,54.8,20.7,54.5z M20.7,52.5 c0-0.3-0.2-0.5-0.5-0.5H19c-0.3,0-0.5,0.2-0.5,0.5S18.7,53,19,53h1.3C20.5,53,20.7,52.8,20.7,52.5z M17.5,60.5 c0-0.3-0.2-0.5-0.5-0.5h-1.8c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H17C17.3,61,17.5,60.8,17.5,60.5z"/><path fill="#fff" d="M71.7,25h-10c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5S72,25,71.7,25z M75.1,24.5 c0-0.3-0.2-0.5-0.5-0.5h-1.4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.4C74.9,25,75.1,24.8,75.1,24.5z M79.2,24.5 c0-0.3-0.2-0.5-0.5-0.5h-2.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h2.5C79,25,79.2,24.8,79.2,24.5z M77.2,20.5 c0-0.3-0.2-0.5-0.5-0.5H67c-0.3,0-0.5,0.2-0.5,0.5S66.8,21,67,21h9.6C76.9,21,77.2,20.8,77.2,20.5z M65.8,20.5 c0-0.3-0.2-0.5-0.5-0.5h-0.6c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h0.6C65.6,21,65.8,20.8,65.8,20.5z M63.4,20.5 c0-0.3-0.2-0.5-0.5-0.5h-1.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.5C63.2,21,63.4,20.8,63.4,20.5z M74.6,22.5 c0-0.3-0.2-0.5-0.5-0.5h-5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h5C74.4,23,74.6,22.8,74.6,22.5z M74.6,20.5 c0-0.3-0.2-0.5-0.5-0.5h-1.3c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.3C74.4,21,74.6,20.8,74.6,20.5z M68.1,22.5 c0-0.3-0.2-0.5-0.5-0.5h-1.8c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h1.8C67.9,23,68.1,22.8,68.1,22.5z"/><path fill="#77cbd2" d="M52,63.1c-14.8,0-26-5.2-26-12.1s11.2-12.1,26-12.1c14.8,0,26,5.2,26,12.1S66.8,63.1,52,63.1z M52,42.5 c-13.3,0-22.5,4.5-22.5,8.5s9.3,8.5,22.5,8.5S74.5,55,74.5,51S65.3,42.5,52,42.5z"/><path fill="#472b29" d="M52,63.8c-15.2,0-26.7-5.5-26.7-12.8S36.8,38.2,52,38.2S78.7,43.7,78.7,51S67.2,63.8,52,63.8z M52,39.6 c-14.2,0-25.3,5-25.3,11.4S37.8,62.4,52,62.4s25.3-5,25.3-11.4S66.2,39.6,52,39.6z M52,60.2c-13.9,0-23.2-4.8-23.2-9.2 s9.3-9.2,23.2-9.2s23.2,4.8,23.2,9.2S65.9,60.2,52,60.2z M52,43.2c-13.5,0-21.8,4.5-21.8,7.8s8.3,7.8,21.8,7.8s21.8-4.5,21.8-7.8 S65.5,43.2,52,43.2z"/><path fill="#77cbd2" d="M42.3,74.4c-1.2,0-2.2-0.3-3.2-0.8C33.4,70.2,34.6,58,42,45.2c5.1-9,12-15.8,17.5-17.2c2-0.5,3.9-0.4,5.4,0.5 c5.7,3.3,4.5,15.5-2.9,28.4c-5.1,9-12,15.8-17.5,17.2C43.7,74.3,43,74.4,42.3,74.4z M61.7,31.1c-0.4,0-0.9,0.1-1.3,0.2 c-4.6,1.2-10.8,7.5-15.4,15.6c-6.4,11.2-7.5,21.8-4.1,23.7c0.7,0.4,1.6,0.5,2.8,0.2c4.6-1.2,10.8-7.5,15.4-15.6 c6.4-11.2,7.5-21.8,4.1-23.7C62.8,31.2,62.3,31.1,61.7,31.1z"/><path fill="#472b29" d="M42.3,75.1c-1.3,0-2.5-0.3-3.5-0.9c-6-3.5-4.9-16.2,2.6-29.4c5.2-9.2,12.3-16.1,17.9-17.6 c2.2-0.6,4.3-0.4,5.9,0.6c6,3.5,4.9,16.2-2.6,29.4c-5.2,9.2-12.3,16.1-17.9,17.6C43.9,75,43.1,75.1,42.3,75.1z M61.7,28.3 c-0.7,0-1.3,0.1-2.1,0.3c-5.3,1.4-12,8.1-17.1,16.9c-7,12.3-8.4,24.4-3.1,27.5c1.3,0.8,3,0.9,4.9,0.4c5.3-1.4,12-8.1,17.1-16.9 c7-12.3,8.4-24.4,3.1-27.5C63.7,28.5,62.8,28.3,61.7,28.3z M42.3,71.6c-0.7,0-1.3-0.1-1.8-0.4c-4.1-2.4-2.3-13.9,3.9-24.7 c4.7-8.3,11.1-14.7,15.8-15.9c1.3-0.4,2.4-0.3,3.3,0.2c4.1,2.4,2.3,13.9-3.9,24.7c-4.7,8.3-11.1,14.7-15.8,15.9 C43.3,71.6,42.7,71.6,42.3,71.6z M61.7,31.8c-0.3,0-0.7,0.1-1.2,0.2c-4.4,1.2-10.4,7.3-15,15.3c-6.6,11.6-7,21.2-4.4,22.8 c0.5,0.3,1.3,0.3,2.2,0.1c4.4-1.2,10.4-7.3,15-15.3c6.6-11.6,7-21.2,4.4-22.8C62.5,31.9,62.1,31.8,61.7,31.8z"/><path fill="#77cbd2" d="M61.7,74.4c-0.7,0-1.5-0.1-2.2-0.3C54,72.6,47.1,65.8,42,56.8c-7.3-12.9-8.6-25.1-2.9-28.4 c1.5-0.9,3.4-1.1,5.4-0.5C50,29.4,56.9,36.2,62,45.2c7.3,12.9,8.6,25.1,2.9,28.4C64,74.1,62.9,74.4,61.7,74.4z M42.3,31.1 c-0.5,0-1,0.1-1.4,0.3c-3.3,1.9-2.3,12.5,4.1,23.7c4.6,8.1,10.8,14.4,15.4,15.6c1.1,0.3,2.1,0.3,2.8-0.2c3.3-1.9,2.3-12.5-4.1-23.7 c-4.6-8.1-10.8-14.4-15.4-15.6C43.1,31.1,42.7,31.1,42.3,31.1z"/><path fill="#472b29" d="M61.7,75.1c-0.8,0-1.6-0.1-2.4-0.3c-5.7-1.5-12.7-8.4-17.9-17.6c-7.7-13.4-8.8-25.8-2.6-29.4 c1.7-1,3.7-1.2,5.9-0.6c5.7,1.5,12.7,8.4,17.9,17.6c7.5,13.2,8.7,25.8,2.6,29.4C64.2,74.8,63,75.1,61.7,75.1z M42.3,28.3 c-1,0-2,0.2-2.8,0.7c-5.3,3.1-3.9,15.1,3.1,27.5c5,8.9,11.8,15.5,17.1,16.9c1.8,0.5,3.5,0.3,4.9-0.4c5.3-3.1,3.9-15.1-3.1-27.5 c-5-8.9-11.8-15.5-17.1-16.9C43.6,28.4,42.9,28.3,42.3,28.3z M61.7,71.6c-0.5,0-1-0.1-1.5-0.2c-4.8-1.3-11.1-7.7-15.8-15.9 c-6.1-10.8-7.9-22.3-3.9-24.7c0.9-0.5,2-0.6,3.3-0.2c4.8,1.3,11.1,7.7,15.8,15.9c6.1,10.8,7.9,22.3,3.9,24.7 C63,71.5,62.4,71.6,61.7,71.6z M42.3,31.8c-0.4,0-0.8,0.1-1.1,0.3c-2.6,1.5-2.2,11.2,4.4,22.8c4.5,8,10.6,14.1,15,15.3 c1,0.3,1.7,0.2,2.2-0.1c2.6-1.5,2.2-11.2-4.4-22.8c-4.5-8-10.6-14.1-15-15.3C43,31.8,42.6,31.8,42.3,31.8z"/><circle cx="52" cy="51" r="5.5" fill="#77cbd2"/><path fill="#472b29" d="M52,57c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S55.3,57,52,57z M52,46c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S54.8,46,52,46z"/><path fill="#472b29" d="M52,54.5c-0.1,0-0.3-0.1-0.3-0.3S51.9,54,52,54c0.3,0,0.7-0.1,1-0.2c0.4-0.2,0.9-0.4,1.2-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.7-1.4,0.9C52.8,54.4,52.4,54.5,52,54.5z"/><g><path fill="#472b29" d="M54.9,52.7c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.3c0-1.2-0.6-2.2-1.7-2.7 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.2,0.6,2,1.8,2,3.1c0,0.5-0.1,1.1-0.4,1.5C55.1,52.6,55,52.7,54.9,52.7z"/></g><g><path fill="#472b29" d="M50.2,48.5c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.2-0.6,1.9-0.6c0.1,0,0.3,0.1,0.3,0.3 S52.1,48,52,48c-0.6,0-1.1,0.2-1.6,0.5C50.3,48.5,50.3,48.5,50.2,48.5z"/></g><g><path fill="#472b29" d="M55.3,38.7c-0.1,0-0.1,0-0.2-0.1c-3.4-4.2-6.7-7-9.6-8.3c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3,1.3,6.4,4.1,9.8,8.5c0.1,0.1,0.1,0.3,0,0.4C55.4,38.7,55.3,38.7,55.3,38.7z"/></g><g><path fill="#472b29" d="M39.5,30.4c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.7-1.2,4.4-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.5-0.5-3.9,0.4-4,0.6C39.6,30.3,39.5,30.4,39.5,30.4z"/></g><g><path fill="#472b29" d="M73.6,56.1c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.2-1.8,3-3.8,2.5-6.1c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.5,2.4-0.4,4.7-2.7,6.6C73.7,56.1,73.7,56.1,73.6,56.1z"/></g><g><path fill="#472b29" d="M69.6,58.3c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.3-0.4,2.7-1.3c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C71,57.9,69.7,58.3,69.6,58.3C69.7,58.3,69.6,58.3,69.6,58.3z"/></g><g><path fill="#472b29" d="M41.9,73C41.9,73,41.9,73,41.9,73c-2.5-0.1-4.1-1.9-4.7-5.3c0-0.1,0.1-0.3,0.2-0.3c0.1,0,0.3,0.1,0.3,0.2 c0.5,3.2,1.9,4.8,4.2,4.9c0.1,0,0.2,0.1,0.2,0.3C42.1,72.8,42,73,41.9,73z"/></g><g><path fill="#472b29" d="M37.3,65.6c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.1,0.2-4,0.3-4.2c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.3,1.9-0.3,4.1C37.5,65.5,37.4,65.6,37.3,65.6C37.3,65.6,37.3,65.6,37.3,65.6z"/></g><g><path fill="#fdfcef" d="M79.2,64.3c1.9,0,3.5,0,3.5,0c2.1,0,3.8-1.7,3.8-3.7c0-1.8-1.3-3.3-3-3.7c0-0.2,0-0.3,0-0.5 c0-2.1-1.8-3.9-4-3.9c-1.3,0-2.4,0.6-3.2,1.5c-0.2-2.4-2.4-4.2-4.9-3.9c-1.9,0.2-3.4,1.6-3.7,3.4c-0.1,0.6-0.1,1.1,0,1.7 c-0.5-0.5-1.2-0.9-2-0.9c-1.4,0-2.6,1.1-2.7,2.5c-0.7-0.1-1.4-0.1-2.1,0.1c-1.4,0.5-2.5,1.9-2.5,3.4c-0.1,2.1,1.7,3.9,3.8,3.9 c0.2,0,0.7,0,0.9,0h7.9 M72.7,64.3h0.4"/><path fill="#472b29" d="M82.7,64.8h-3.5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h3.5c1.8,0,3.3-1.5,3.3-3.2c0-1.5-1.1-2.9-2.6-3.2 c-0.3-0.1-0.4-0.3-0.4-0.6c0-0.1,0-0.3,0-0.4c0-1.9-1.6-3.4-3.5-3.4c-1.1,0-2.1,0.5-2.8,1.3c-0.1,0.2-0.3,0.2-0.5,0.2 c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-1-0.6-1.9-1.4-2.6c-0.8-0.7-1.9-1-3-0.9c-1.6,0.2-3,1.4-3.3,3c-0.1,0.5-0.1,1,0,1.5 c0,0.2-0.1,0.4-0.3,0.5c-0.2,0.1-0.4,0.1-0.6-0.1c-0.4-0.5-1-0.7-1.6-0.7c-1.2,0-2.1,0.9-2.2,2c0,0.1-0.1,0.3-0.2,0.4 c-0.1,0.1-0.3,0.1-0.4,0.1c-0.6-0.1-1.2-0.1-1.8,0.1c-1.3,0.5-2.1,1.6-2.2,2.9c0,0.9,0.3,1.7,0.9,2.3c0.6,0.7,1.5,1,2.4,1h8.8 c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5h-8.8c-1.2,0-2.3-0.5-3.1-1.3c-0.8-0.8-1.2-1.9-1.2-3.1c0.1-1.7,1.2-3.2,2.8-3.8 c0.6-0.2,1.2-0.3,1.9-0.2c0.3-1.4,1.6-2.4,3.1-2.4c0.5,0,1,0.1,1.4,0.3c0-0.2,0-0.5,0.1-0.7c0.4-2,2.1-3.6,4.2-3.8 c1.4-0.2,2.7,0.2,3.7,1.1c0.7,0.6,1.3,1.4,1.5,2.3c0.8-0.6,1.8-1,2.8-1c2.5,0,4.5,2,4.5,4.4c0,0,0,0.1,0,0.1c1.8,0.6,3,2.2,3,4 C87,62.9,85.1,64.8,82.7,64.8z M73.1,64.8h-0.4c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h0.4c0.3,0,0.5,0.2,0.5,0.5 S73.3,64.8,73.1,64.8z"/><g><path fill="#472b29" d="M81,59C81,59,81,59,81,59c-0.2,0-0.3-0.2-0.2-0.3c0-0.2,0.1-0.3,0.2-0.5c0.6-1.2,2.3-1.7,3.7-1 c0.1,0.1,0.2,0.2,0.1,0.3c-0.1,0.1-0.2,0.2-0.3,0.1c-1.2-0.6-2.6-0.2-3.1,0.8c-0.1,0.1-0.1,0.2-0.1,0.4C81.2,58.9,81.1,59,81,59z"/></g><g><path fill="#472b29" d="M75.9,64.8h-1.1c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h1.1c0.3,0,0.5,0.2,0.5,0.5S76.1,64.8,75.9,64.8z"/></g></g>
                  </svg>
                  <div>
                    <span className="flex flex-wrap">Please wait :-)</span>
                  </div>
                </div>
      }
      {!loading &&
                    <div>
                      <div>
                        {/* eslint-disable-next-line max-len */}
                        <RecentObjectsTable loadingState={loading} dataIn={neoData} />
                      </div>
                      <div className="mt-12 mb-12">
                        <div>
                          <div className="flex">
                            <TextWithVDivider options={textOptions}/>
                          </div>
                        </div>
                      </div>
                    </div>
      }
    </>
  );
}

export default Home;
