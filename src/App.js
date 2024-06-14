import { Routes, Route, Link} from "react-router-dom";
import About from "./Pages/About/About";
import Event from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import RegisterEvent from "./Pages/RegisterEvent/RegisterEvent";
import Jakarta from "./Pages/City/Jakarta";
import Bandung from "./Pages/City/Bandung";
import Yogya from "./Pages/City/Yogya";
import Malang from "./Pages/City/Malang";
import CardOne from "./Pages/Events/EventItems/CardOne";
import CardTwo from "./Pages/Events/EventItems/CardTwo";
import CardThree from "./Pages/Events/EventItems/CardThree";
import CardFour from "./Pages/Events/EventItems/CardFour";
import CardFive from "./Pages/Events/EventItems/CardFive";
import CardSix from "./Pages/Events/EventItems/CardSix";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Jakarta" element={<Jakarta />}></Route>
        <Route path="/Bandung" element={<Bandung />}></Route>
        <Route path="/Yogya" element={<Yogya />}></Route>
        <Route path="/Malang" element={<Malang />}></Route>
        <Route path="/Events" element={<Event />}></Route>
        <Route path="/RegisterEvent" element={<RegisterEvent />}></Route>
        <Route path="/CardOne" element={<CardOne />}></Route>
        <Route path="/CardTwo" element={<CardTwo />}></Route>
        <Route path="/CardThree" element={<CardThree />}></Route>
        <Route path="/CardFour" element={<CardFour />}></Route>
        <Route path="/CardFive" element={<CardFive />}></Route>
        <Route path="/CardSix" element={<CardSix />}></Route>
    </Routes> 
    </>
  );
}

export default App;
