import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import backgroundYogya from "../../Images/backgroundYogya.png"
import natureYogya from "../../Images/natureYogya.png"
import jakartaCulture from "../../Images/jakartaCulture.png"
import yogyaCuisine from "../../Images/yogyaCuisine.jpg"

import whereYogya from "../../Images/whereYogya.jpg"
import "../City/Yogya.css"

import CardSlider from "../../Components/CardSlider/CardSlider"

export default function Yogya() {
  return (
    <>
      <Navbar></Navbar>

      <div className='about-image'>
      <img src={backgroundYogya}></img>
      </div>

      <div className='about-gradient'></div>

      <div className='yogya-title'>
        <h1>YOGYAKARTA</h1>
        <p>Yogyakarta is the cradle of civilization on Java. This city was the seat of power that produced the magnificent temples of Borobudur and Prambanan in the 8th and 9th centuries. Yogyakarta was known with the slogan of “Jogja The Never ending Asia“ for its endless appeals. Today, it is also renowned as “Jogja Istimewa “.</p>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
          <div className='jakarta-pic text-white w-7/12'>
          <img src={natureYogya}></img>
          </div>
          <div className='jakarta-text text-white w-7/12'>
            <h1>- Nature</h1>
            <p>Java island host many beautiful landscapes, interesting UNESCO heritage site, stunning volcanoes, some surfing spot, snorkeling spot and many more. In Yogyakarta, you can visit the real Javanese Culture which you can see from the local people here and also the places that you will visit. Prambanan Temple, Sultan Palace, Malioboro Street, Kali Adem in Mount Merapi. If you are looking for natural tourism, you can visit Kaliurang, Pindul Cave, Fat Sand Parangkusumo, Kedung Kagar Waterfall, and others.</p>
          </div>
        </div>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
        <div className='java-text text-white w-6/12'>
            <h1>- Culture</h1>
            <p style={{fontSize: "15px"}}>Traveling will become unique and memorable once you immerse yourself in cultural experiences and discover the destination’s historical heritage. Two famous areas known for their rich traditional cultures and activities in Indonesia are Central Java and Yogyakarta, providing a complete paradise for culture seekers alike. With their historical landmarks, intricate batik arts, and delicious culinary dishes, you can directly observe the locals' livelihoods and understand the beauty within the area. Here is some typical culture of Yogyakarta, Sendratari Ramayana, Sekaten Ceremony, Grebeg Maulud Ceremony, Cupu Panjalo Ceremony and others.</p>
          </div>
          <div className='jkt-pic w-7/12'>
          <img src={jakartaCulture}></img>
          </div>
        </div>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
          <div className='jakarta-pic text-white w-7/12'>
          <img src={yogyaCuisine}></img>
          </div>
          <div className='jakarta-text text-white w-7/12'>
            <h1>- CUISINE</h1>
            <p>Yogyakarta is a city that is always praised for its culture and fine arts. However there is another aspect to Yogyakarta that should not be left out. Yogyakarta offers a wide array of culinary delicacy. This city has a lot of amazing food, some of them are like gudeg, tiwul, bakpia pathok, jadah tempe, centhil, yangko, geplak, tempe benguk, Mie Lethek, Sate Klatak and many more.</p>
          </div>
        </div>
      </div>

      <div className='jakartaHoliday'>
        <p>ENJOY HOLIDAY</p>
        <h1>Where Would You Wanna Go?</h1>
      </div>
      <div className='holiday-img'>
      <img src={whereYogya}></img>
      </div>
      
      <div className='slider'>
        <CardSlider></CardSlider>
      </div>
    </>
  )
}
