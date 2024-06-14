import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import backgroundEventsFive from '../../../Images/backgroundEventsFive.jpg'

import "./CardEvents.css"

export default function CardFive() {
  return (
    <>
      <Navbar></Navbar>
      <div className='CardOneEvent flex w-12/12 mx-auto'>
      <img src={backgroundEventsFive}></img>
      <div className="cardOne text-white w-7/12">
        <h1>International Indonesia Seafood and Meat</h1>
        <p>Indonesia’s leading exhibition in cold connection will be back for the 9th edition on March 23-26, 2022. Being the oldest trade exhibition in Indonesia for the Seafood and Meat industry, IISM is the best platform for those in the industry. If you are in the industry, this is the event that you don’t want to miss! <br></br><br></br>Organized in conjunction with Indonesia Cold Chain Expo, to highlight the importance of the cold connection in keeping up with Indonesia’s demand for fresh produce, and Food + Beverage Indonesia, the curated and up-and-coming exhibition for the food and beverage industry, IISM is surely the place to be if you are in the industry. Don’t miss this oppor-tuni-ty!</p>
      </div>
      </div>
    </>
  );
}
