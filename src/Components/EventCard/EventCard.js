import React from "react";
import { Link } from "react-router-dom";
import "../../Pages/Events/Events"
import "../EventCard/EventCard.css"

function EventCard(props) {
  return (
    <>
      <div className="max-w-sm rounded-lg event-card">
        <img className="rounded-t-lg" src={props.eventImg} alt=""/>
        <div className="p-5">
            <h5 className="mb-2 font-bold eventTitle">{props.eventTitle}</h5>
            <p className="mb-3 text-xs eventdate">{props.date}</p>
            <p className="mb-1 eventdesc">{props.eventDesc}</p>
            <br></br><br></br>
        </div>
      </div>
    </>
  );
}

export default EventCard;
