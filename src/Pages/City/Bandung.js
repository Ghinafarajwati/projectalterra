import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import BgBandung from "../../Images/bdg.png"
import BandungNature from "../../Images/bandungNature.jpg"
import BandungCulture from "../../Images/bandungCulture.png"
import bandungCuisine from "../../Images/bandungCuisine.jpg"
import bgWhere from "../../Images/bgWhere.jpg"
import "../City/Jakarta.css"

import CardSlider from "../../Components/CardSlider/CardSlider"

export default function Jakarta() {
  return (
    <>
      <Navbar></Navbar>

      <div className='about-image'>
      <img src={BgBandung}></img>
      </div>

      <div className='about-gradient'></div>

      <div className='jakarta-title'>
        <h1>BANDUNG</h1>
        <p>Bandung is the capital city of West Java. Bandung has Paris and European atmosphere back at the colonial times. Bandung also earned another nickname as Kota Kembang, literally meaning the Flower City since Bandung used to have a lot of flowers.</p>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
          <div className='jakarta-pic text-white w-7/12'>
          <img src={BandungNature}></img>
          </div>
          <div className='jakarta-text text-white w-7/12'>
            <h1>- Nature</h1>
            <p>Bandung goes by the moniker of “Paris of Java” and this quaint city might just be as charming as its European counterpart. From mythical misty volcanoes to hectares of luscious tea plantations, Bandung is a booming metropolis with plenty of unconventional adventures and picturesque sights — guaranteed to soothe your eyes and soul. There are some reasons why you should escape your dreary routines and head to Bandung now, example, Catch breathtaking sunrises or sunsets atop a cliff, Hike up this active volcano for an incredible experience Gaze at the spectacular turquoise crater lakes, Find everlasting love at a stunning lake, Explore the abundance of dreamy natural landscapes and many more.</p>
          </div>
        </div>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
        <div className='java-text text-white w-6/12'>
            <h1>- Culture</h1>
            <p style={{fontSize: "15px"}}>Bandung is the capital of West Java. While there are plenty of similarities, the culture here is in many ways hugely different to other cultures and ethnicities within Indonesia. The region has it’s own distinct cuisine, language, and traditions. There’s a lot to discover, and the culture alone makes a stop at Bandung worth while. Bandung is also a welcoming home to those who want to preserve Sundanese culture. One of the most prominent is Saung Angklung Udjo that aims to not only preserve the traditional music instrument, but also educate the tourists to play and enjoy them.</p>
          </div>
          <div className='jkt-pic w-7/12'>
          <img src={BandungCulture}></img>
          </div>
        </div>
      </div>

      <div className='container-jakarta'>
        <div className='flex w-9/12 mx-auto'>
          <div className='jakarta-pic text-white w-7/12'>
          <img src={bandungCuisine}></img>
          </div>
          <div className='jakarta-text text-white w-7/12'>
            <h1>- CUISINE</h1>
            <p>Looking for local Bandung cuisine? Need to satisfy your appetite while you're exploring the city? If you are not familiar with the culinary capital of West Java, then this website is the guide for you. Bandung is famous for its Batagor and Siomay, savory fried/steamed fish cakes served with spicy peanut sauce, but the city has more culinary delights you can savor. And when you're enjoying Bandung, answer your curiosity on the native Sundanese culinary by trying these famous street foods like Mie Kocok, Batagor Bandung, Seblak, Karedok, Nasi Tutug Oncom, Lotek, Colenak, Surabi and many more.</p>
          </div>
        </div>
      </div>

      <div className='jakartaHoliday'>
        <p>ENJOY HOLIDAY</p>
        <h1>Where Would You Wanna Go?</h1>
      </div>
      <div className='holiday-img'>
      <img src={bgWhere}></img>
      </div>
      
      <div className='slider'>
        <CardSlider></CardSlider>
      </div>
    </>
  )
}
