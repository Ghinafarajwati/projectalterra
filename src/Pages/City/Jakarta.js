import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import BgJakarta from "../../Images/BgJakarta.png"
import jakartaMangrove from "../../Images/jakartaMangrove.jpg"
import jakartaCulture from "../../Images/jakartaCulture.png"
import JakartaCuisine from "../../Images/JakartaCuisine.jpg"

import JakartaDua from "../../Images/JakartaDua.png"
import "../City/Jakarta.css"

import CardSlider from "../../Components/CardSlider/CardSlider"

export default function Jakarta() {
  return (
    <>
      <Navbar></Navbar>

      <div className='about-image'>
      <img src={BgJakarta}></img>
      </div>

      <div className='about-gradient'></div>

      <div className='jakarta-title'>
        <h1>JAKARTA</h1>
        <p>Jakarta is the center of government, business, and industry, offering many interesting places, a diverse culture, exotic beaches, and natural wonders, as well as hospitable people and unique nightlife entertainment.</p>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
          <div className='jakarta-pic text-white w-7/12'>
          <img src={jakartaMangrove}></img>
          </div>
          <div className='jakarta-text text-white w-7/12'>
            <h1>- Nature</h1>
            <p>Visiting natural spots become a trend lately as travelers prefer outdoor areas for their trips. With lush green scenery and fresh air, the trip could be a healthy experience as well. For Jakarta residents, here are some of the top natural spots for you to visit, some of them are Taman Wisata Alam Mangrove, Pantai Indah Kapuk, Taman Mini Indonesia Indah, Ragunan Zoo, Gunung Mas Tea Plantation, Tanjungsari Deer Tourism Park Cariu, Bogor Botanical Garden, Situ Gunung, Gunung Pancar and Leuwi Hejo Waterfall.</p>
          </div>
        </div>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
        <div className='java-text text-white w-6/12'>
            <h1>- Culture</h1>
            <p style={{fontSize: "15px"}}>As the capital of Indonesia, Jakarta is the melting point of cultures of all ethnic groups of the country. Though Betawi people are an indigenous community of Jakarta, the city's culture represents many languages and ethnic groups, support differences regarding religion, traditions and linguistics, rather than any single and dominant culture. The cultures of the Javanese and other Indonesian ethnic groups have a higher profile than that of the Betawi. There is a significant Chinese influence in Betawi culture, reflected in the popularity of Chinese cakes and sweets, firecrackers and Betawi wedding attire that demonstrates Chinese and Arab influences.</p>
          </div>
          <div className='jkt-pic w-7/12'>
          <img src={jakartaCulture}></img>
          </div>
        </div>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
          <div className='jakarta-pic text-white w-7/12'>
          <img src={JakartaCuisine}></img>
          </div>
          <div className='jakarta-text text-white w-7/12'>
            <h1>- CUISINE</h1>
            <p>Jakarta! A culturally rich city that is full of splendour and pomp which will leave anyone in awe at its hospitality and goodwill of its citizens. If you need a reason to visit Jakarta, then food would be a great one! The streets here are laden with loads of fingerlickin' and lip-smacking good food, making any tourist or visitor come back for more for example kerak telor, asinan betawi, gado-gado, nasi uduk, soto tangkar and many more. </p>
          </div>
        </div>
      </div>

      <div className='jakartaHoliday'>
        <p>ENJOY HOLIDAY</p>
        <h1>Where Would You Wanna Go?</h1>
      </div>
      <div className='holiday-img'>
      <img src={JakartaDua}></img>
      </div>
      
      <div className='slider'>
        <CardSlider></CardSlider>
      </div>
    </>
  )
}
