import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import backgroundEvents from '../../../Images/backgroundEvents.png'

import "./CardEvents.css"

export default function CardOne() {
  return (
    <>
      <Navbar></Navbar>
      <div className='CardOneEvent flex w-12/12 mx-auto'>
      <img src={backgroundEvents}></img>
      <div className="cardOne text-white w-7/12">
        <h1>Bakpia Teras Malioboro</h1>
        <p>The Bakpia Festival will be held from Thursday to Sunday, May 5-8, at the Malioboro 1 Terrace. The Bakpia Festival will start from 11.00 to 20.00 WIB. The Bakpia Festival was held as one of the Malioboro Terrace 1 business service strategies to introduce bakpia tenants who occupy the 3rd Floor in Building A. The Festival is a collaboration between the the malioboro 1 Terrace Manager and the bakpia souvenir tenant association on the 3rd Floor by holding a program bazaar bakpia with obe price, which is enough with Rp 10.000 only. <br></br><br></br>During the 4 days of The Bakpia Festival, 1000 fresh bakpia will be distributed to visitors at Malioboro 1 Terrace with easy conditions, namely following the social media of Malioboro Terrace. Apart from Bakpia, this festival will also be attended by representatives from the agate gemstone tenant associations and will be enlivened by the appearance of a number of acoustic musicians who will entertain on Malioboro 1 Terrace.</p>
      </div>
      </div>
    </>
  );
}
