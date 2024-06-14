import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import {data} from "./DataSlider"
import "./CardSlider.css"

import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const CardSlider = () => {
  return (
      <div className="mx-24 cardslider">
        <div className='card-title'>
        <p>MEMORABLE JOURNEY</p>
        <h1>EXPLORE</h1>
      </div>
      <Slider
        GrCaretPrevious={<GrCaretPrevious/>}
        GrCaretNext={<GrCaretNext />}
        slidesToShow={3}
      >
        {data.map((item, index) => (
            <img src={item} key={index} alt=""></img>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;