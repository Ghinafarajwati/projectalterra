import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import backgroundEventsSix from '../../../Images/backgroundEventsSix.jpg'

import "./CardEvents.css"

export default function CardSix() {
  return (
    <>
      <Navbar></Navbar>
      <div className='CardOneEvent flex w-12/12 mx-auto'>
      <img src={backgroundEventsSix}></img>
      <div className="cardOne text-white w-7/12">
        <h1>Wayang Jogja Night Carnival</h1>
        <p>Yogyakarta Wayang Jogja Night Carnival, is the biggest annual event owned by the city of Yogyakarta, which is held every October 7 to commemorate the anniversary the city of Yogyakarta. As the biggest annual event that is eagerly awaited by the community, of course the Yogyakarta City government through the Yogyakarta City Tourism Office continues to innovate, both in the concept and packaging of the event. So that later this event will not only be a spectacle, but is also expected as a means of education. <br></br><br></br>Coinciding with the 262nd Anniversary of the City of Yogyakarta, the Wayang Jogja Night Carnival 'WJNC' is here again featuring the main actors, namely 14 sub-districts which are planned to complete the sparkling festivities of Jogja Birthday along Sudirman Street to Mangkubumi Street at 18.00-22.00 WIB.</p>
      </div>
      </div>
    </>
  );
}
