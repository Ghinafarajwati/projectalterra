import EventCard from "../../Components/EventCard/EventCard";
import bakpiaTeras from "../../Images/bakpiaTeras.jpg";
import lamponWaisak from "../../Images/lamponWaisak.jpg";
import prambananJazz from "../../Images/prambananJazz.jpg";
import eastJava from "../../Images/eastJava.jpg";
import internationalSeafoodMeat from "../../Images/internationalSeafoodMeat.jpg";
import wayangJogya from "../../Images/wayangJogya.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import EventBg from '../../Images/eventBg.png'
import { Link } from "react-router-dom";

function Event() {
  return (
    <>
    <Navbar></Navbar>

    <div className='event-image'>
      <img src={EventBg}></img>
    </div>

      <div className='latest-title'>
        <p>LATEST EVENT</p>
        <h1>Be part of the excitement of the event in Java!</h1>
      </div>

     <div className="card-content flex-wrap flex space-x-6 justify-center">
        <EventCard eventImg={bakpiaTeras} eventTitle="Bakpia Teras Malioboro" date="5-8 May 2022"  eventDesc="This festival will be held as one of the Malioboro Terrace business service strategies to introduce bakpia tenants who occupy the 3rd floor in Building A."></EventCard> <Link to="/CardOne"><button className="btnCardOne">More</button></Link>
        <EventCard eventImg={lamponWaisak} eventTitle="Lampion Waisak Nasional" date=" 16 May 2022"  eventDesc="The series of activities include distribution of basic necessities, taking internal fire, taking blessed water and closing with Dharmasanti Vesak." path="/CardOne"></EventCard> <Link to="/CardTwo"><button className="btnCardTwo">More</button></Link>
        <EventCard eventImg={prambananJazz} eventTitle="Prambanan JAZZ" date="1-3 July 2022"  eventDesc="This annual music festival will be held on July 1-3 offline and online at Rama Shinta Square, Prambanan Temple, Yogyakarta.”"></EventCard> <Link to="/CardThree"><button className="btnCardThree">More</button></Link>
        <EventCard eventImg={eastJava} eventTitle="East Java Fashion Harmony" date=" 10 November 2022"  eventDesc="East Java Fashion Harmony is a fashion show that aims to promote and elevate the value of local wisdom of East Java batik with popular designers in Indonesia which will be held in Banyuwangi."></EventCard> <Link to="/CardFour"><button className="btnCardFour">More</button></Link>
        <EventCard eventImg={internationalSeafoodMeat} eventTitle="International Indonesia Seafood and Meat" date=" 18-19 May 2022"  eventDesc="International Indonesia Seafood and Meat is known to be the pioneer exhibition in the cold chain and refrigeration industry."></EventCard><Link to="/CardFive"><button className="btnCardFive">More</button></Link>
        <EventCard eventImg={wayangJogya} eventTitle="Wayang Jogja Night Carnival" date=" 7 Oktober 2022"  eventDesc="Coinciding with the 261st Anniversary of the City of Yogyakarta, the Wayang Jogja Night Carnival is back which is planned to complete the sparkling festivities of Jogja's Birthday along Jalan Sudirman to Jalan Mangkubumi."></EventCard><Link to="/CardSix"><button className="btnCardSix">More</button></Link>
      </div>
    </>
  );
}

export default Event;
