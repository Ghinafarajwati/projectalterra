import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import backgroundEventsFour from '../../../Images/backgroundEventsFour.jpg'

import "./CardEvents.css"

export default function CardFour() {
  return (
    <>
      <Navbar></Navbar>
      <div className='CardOneEvent flex w-12/12 mx-auto'>
      <img src={backgroundEventsFour}></img>
      <div className="cardOne text-white w-7/12">
        <h1>East Java Fashion Harmony. </h1>
        <p>Promoting batk from East Java is the main reason for holding the East Java Fashion Harmony. Every year, a batik-themed fashion show is attended by dozens of swaying models exhibiting the work of the designers. Governor Khofifah said the fashion show event was held as a form of commitment to promote batik typical of East Java. <br></br><br></br>East Java itself has a rich variety of batik motifs with noble values and high local wisdom. East Java Fashion Harmony is able to raise the value of local wisdom about classic East Javanese batik to the national and international scene.</p>
      </div>
      </div>
    </>
  );
}
