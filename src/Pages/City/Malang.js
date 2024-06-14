import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import bgMalang from "../../Images/bgMalang.png"
import natureMalang from "../../Images/natureMalang.png"
import cultureMalang from "../../Images/cultureMalang.png"
import malangCuisine from "../../Images/mendol.jpg"

import goMalang from "../../Images/goMalang.png"
import "../City/Malang.css"

import CardSlider from "../../Components/CardSlider/CardSlider"

export default function Malang() {
  return (
    <>
      <Navbar></Navbar>

      <div className='about-image'>
      <img src={bgMalang}></img>
      </div>

      <div className='about-gradient'></div>

      <div className='yogya-title'>
        <h1>MALANG</h1>
        <p>Malang is a modern, comfortable, and beautiful city. It has shopping centers, department stores, 40 Universities, sporting facilities, entertainment, theaters, cultural and attractive recreation places, as well as many old architecture buildings. It is about 2 hours by car from Juanda Airport, Surabaya, and about 30 minutes from Abdulrahman Saleh Malang Airport.</p>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
          <div className='jakarta-pic text-white w-7/12'>
          <img src={natureMalang}></img>
          </div>
          <div className='jakarta-text text-white w-7/12'>
            <h1>- Nature</h1>
            <p>As the second largest city in East-Java, Malang has a cool climate as it is surrounded by beautiful mountains among which are mount Kawi, mount Bromo (Some of the most beautiful places for tourists to visit) a mount Semeru (the highest mount in java), and mount Panderman. The climate is temperate with cool to warm weather, and its daily temperatures are between 20-28 degree C. </p>
          </div>
        </div>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
        <div className='java-text text-white w-6/12'>
            <h1>- Culture</h1>
            <p style={{fontSize: "15px"}}>Malang has various ethnic groups and cultures from all over Indonesia and the world. The population of Malang majority of Javanese, followed by the Madurese, and Chinese or Peranakan. As a center of tourism, Malang has various places of interest which can be classified into local, regional, national and international standards, including traditional dance performances such as Tari Topeng (Mask Dance), Jaranan Pegon (Divine Horse Dance), Tari Beskalan (Beskalan Dance), Tari Bedayan Malang (Welcome Guests Dance), and Tari Grebeg Wiratama (Soldier's Fame Dance). There is also 'Topeng' or mask handicraft in the villages of Jabung and Kedungmonggo, which have become a familiar landmark in Malang Regency.</p>
          </div>
          <div className='jkt-pic w-7/12'>
          <img src={cultureMalang}></img>
          </div>
        </div>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
          <div className='jakarta-pic text-white w-7/12'>
          <img src={malangCuisine}></img>
          </div>
          <div className='jakarta-text text-white w-7/12'>
            <h1>- CUISINE</h1>
            <p>Malang has developed its technology and innovation to make everyone capable to enjoy food properly. Using some creatives combination of preserving food, Malang provides so many street foods in most of every corner of the city just like the most famous Yogyakarta street food, some of malang traditional food are bakso malang, rawon, nasi pecel, ronde titoni, orem-orem, tempe mendol, and the others</p>
          </div>
        </div>
      </div>

      <div className='jakartaHoliday'>
        <p>ENJOY HOLIDAY</p>
        <h1>Where Would You Wanna Go?</h1>
      </div>
      <div className='holiday-img'>
      <img src={goMalang}></img>
      </div>
      
      <div className='slider'>
        <CardSlider></CardSlider>
      </div>
    </>
  )
}
