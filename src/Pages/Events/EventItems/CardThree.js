import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import backgroundEventsThree from '../../../Images/backgroundEventsThree.jpg'

import "./CardEvents.css"

export default function CardThree() {
  return (
    <>
      <Navbar></Navbar>
      <div className='CardOneEvent flex w-12/12 mx-auto'>
      <img src={backgroundEventsThree}></img>
      <div className="cardOne text-white w-7/12">
        <h1>Prambanan JAZZ</h1>
        <p>The Prambanan Jazz Festival 2022 comes with a new theme, namely Sewindu Celebrating Longing. This is intended as a sign because for more than two years fans have not been able to witness the Prambanan Jazz Festival directly due to the Covid-19 pandemic. This annual international music festival is planned to take place on July 1,2,and 3, 2022. At this festival there will also be many musicians present to perform different genres of music. Like Andien, Diskoria, Kahitna, Kunto Aji, Sinten Ramen Orchestra, Ndarboy Genk, Fiersa Besari, Tulus, and many more. <br></br> <br></br>Just like previous years, the Prambanan Jazz Festival is looking for talented talents to participate in presenting their work on the festival stage with other musicians. This year the search for talented talents is targeting the Jakarta and West Java areas.</p>
      </div>
      </div>
    </>
  );
}
