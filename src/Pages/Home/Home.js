import React from 'react'
import Card from '../../Components/Cards/Card'
import Nav from '../../Components/Navbar/Nav'
import "../Home/Home.css"

import Background from '../../Images/background2.jpg'
import Jakarta from '../../Images/jakarta.jpg'
import Bandung from '../../Images/bandung.png'
import Yogya from '../../Images/tamanSari.jpg'
import Malang from '../../Images/gunungBromo.png'
import AboutPic from '../../Images/aboutPic.png'
import Nature from "../../Images/nature.png"
import Culture from "../../Images/culture.jpg"
import HomeWhere from "../../Images/homewhere.png"

import { Link } from 'react-router-dom'
import Gallery from '../../Components/Gallery/Gallery'
import HomeTravel from '../../Components/Slider Travel/HomeTravel'

export default function Home() {
  return (
    <>
      <div id="Intro">
      <Nav></Nav>
      <div className='home-image'>
      <img src={Background}></img>
      </div>

      <div className='gradient'></div>
      
      <div className='round-container'>
        <div className='round-box'>
        <img src={Jakarta}></img>
        <p>GET INTO THE FUTURE</p> <span><p>Jakarta</p></span>
        </div>
        <div className='round-box'>
        <img src={Bandung}></img>
        <p>FRIENDS WITH NATURE</p> <span><p>Bandung</p></span>
        </div>
        <div className='round-box'>
        <img src={Yogya}></img>
        <p>TURN BACK THE TIME IN</p> <span><p>Yogyakarta</p></span>
        </div>
        <div className='round-box'>
        <img src={Malang}></img>
        <p>GET IMPRESSED BY</p> <span><p>Malang</p></span>
        </div>
      </div>

      <div className='home-title'>
        <p>Event</p>
        <h1>JAVA</h1>
      </div>

      <Link to="/Jakarta" id="City">
      <div className='explore-btn text-white'>
      <button className='btn-expl'>Explore <span><i class="fa-solid fa-right-long ml-2"></i></span></button>
      </div>
      </Link>

      </div>

      <div className='card-title'>
        <p>MEMORABLE JOURNEY</p>
        <h1>EXPLORE</h1>
      </div>
      <div className='card-content flex-row flex space-x-6 justify-center'>
      <Card
      img={Nature}
      title="NATURE"
      ></Card>
      <Card
      img={Culture}
      title="CULTURE"
      ></Card>
      <Card
      img={Jakarta}
      title="CUISINE"
      ></Card>
      </div>

      <div className='container-about'>
        <div className='flex w-9/12 mx-auto'>
          <div className='about-pic text-white w-7/12'>
          <img src={AboutPic}></img>
          </div>
          <div className='about-text text-white w-7/12'>
            <div id="About-us">
            <h1> - ABOUT <span style={{fontWeight: "700", color: "#e7720b"}}>JAVAKU</span></h1>
            </div>
            <p style={{letterSpacing: "1px"}}>Find holiday inspiration with various events at Eventku, and make every time you spend in Java unforgettable. Starting from trying a variety of delicious Javanese culinary delights, exploring various charming tourist destinations, participating in cultural festivals, lively shopping experiences, and a myriad of other exciting activities. Are you ready to enjoy Amazing Java?</p>
            
            <Link to="/About" id="About">
            <button className='about-btn'>About Java <span><i class="fa-solid fa-right-long ml-2"></i></span></button>
            </Link>
          </div>
        </div>
      </div>

      <div className='holiday-title'>
        <p>ENJOY HOLIDAY</p>
        <h1>Where Would You Wanna Go?</h1>
      </div>
      <div className='holiday-img'>
      <img src={HomeWhere}></img>
      </div>

      <div className='travel-title text-white'>
        <h1>TRAVEL INSPIRATION</h1>
        <p>Travel inspiration ideas for your next big travel adventure</p>
      </div>

      <HomeTravel></HomeTravel>

      <div id="galerry-home">
      <div className='travel-title text-white'>
        <h1>GALLERY</h1>
        <p>Find Inspiration For Your Journey</p>
      </div>
      </div>

      <Gallery></Gallery>
    </>
  )
}
