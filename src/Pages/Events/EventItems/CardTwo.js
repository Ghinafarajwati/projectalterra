import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import backgroundEventsTwo from '../../../Images/backgroundEventsTwo.jpg'

import "./CardEvents.css"

export default function CardTwo() {
  return (
    <>
      <Navbar></Navbar>
      <div className='CardOneEvent flex w-12/12 mx-auto'>
      <img src={backgroundEventsTwo}></img>
      <div className="cardOne text-white w-7/12">
        <h1>Lampion Waisak Nasional</h1>
        <p>Vesak Day is holy day for Buddhists to commemorate the birth of siddhartha, the moment Siddhartha besame Buddha and the deathof Gautama Buddha. This year, The Lantern Festival at Borobudur Temple, precisely at Marga Utama Square, will be held again on Monday night. <br></br> The festival was held to coincide with National Vesak Day 2566 BE in 2022. This festival is the first festival to ben held after two years of being canceled due to the Covid-19 pandemic. <br></br> <br></br>The following is a series of events for the 2022 Vesak celebration: May 14, 2022: distribution of basic necessities to residents around Borobudur and Menduts Temples and taking natural fire from Mrapen, Grobogan Regency. May 15, 2022: taking blessed water from the jumprit banner in Temanggung Regency. May 16, 2022: second ritual – Second of Vesak at 11:13:46 WIB. May 16, 2022 night: The highlight of the event is the release of environmentally friendly lanterns.</p>
      </div>
      </div>
    </>
  );
}
