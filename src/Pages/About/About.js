import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import MultiSlider from '../../Components/Slider/MultiSlider'
import CityInJava from '../About/CityInJava'
import "../About/About.css"
import Background from '../../Images/background2.jpg'
import BorobudurAbout from '../../Images/borobudurAbout.png'
import otherBgJava from '../../Images/otherBgJava.png'


export default function About() {
  return (
    <>
    <div id="about">
    <Nav></Nav>
      <div className='about-image'>
      <img src={Background}></img>
      </div>

      <div className='about-gradient'></div>
      
      <div className='about-title'>
        <h1>JAVA</h1>
      </div>

      <div className='about-slider'>
        <MultiSlider></MultiSlider>
      </div>

      <div className='container-about'>
        <div className='flex w-9/12 mx-auto'>
        <div className='about-txt text-white w-6/12'>
            <h1>- About Java</h1>
            <p style={{fontSize: "15px"}}>Java, also spelled Djawa or Jawa, island of Indonesia lying southeast of Malaysia and Sumatra, south of Borneo (Kalimantan), and west of Bali. Java is home to roughly half of Indonesia’s population and dominates the country politically and economically. The capital of Java and of the country is Jakarta (formerly Batavia), which is also Indonesia’s largest city. Java’s rich vegetation is southern Asian, with Australian affinities; more than 5,000 species of plants are known.</p>
          </div>
          <div className='java-pic w-7/12'>
          <img src={BorobudurAbout}></img>
          </div>
        </div>
      </div>

      <div className='container-about'>
        <div className='flex w-10/12 mx-auto'>
          <div className='about-java text-white w-7/12'>
          <img src={otherBgJava}></img>
          </div>
          <div className='abt-text text-white w-7/12'>
            <h1>- Java</h1>
            <p style={{fontSize: "15px"}}>Several ethnic groups live in Java. Among them are the people named for the island, the Javanese, who make up 40% of the entire Indonesian population. On the western side of the island are the Sundanese, named for the Sunda Islands of southwestern Indonesia, which include Java. In eastern Java are large populations of Balinese and Madurese people, who are native to the neighboring islands of Bali and Madura. <br></br> Java's economy is quite diversified, and includes sizeable agricultural, mining, manufacturing, and oil and gas sectors. More than two thirds of the island is under cultivation. Important crops include sugar cane, kapok, rubber, tea, coffee, tobacco, cacao, corn, maize, cassava, peanuts, soybeans, sweet potatoes, and rice.</p>
          </div>
        </div>
      </div>

      <CityInJava></CityInJava>
    </div>
    </>
  )
}
