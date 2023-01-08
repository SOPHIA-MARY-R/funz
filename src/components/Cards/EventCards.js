import "../Cards/CardStyle.css";
import { Link } from "react-router-dom";
import React from "react";

//Cards for events
const CardStyle = {
  Container: {border: 'none'}
}

export default function EventCard(props) {
  return (
    <Link to={props.url}><div className="event-card" style={CardStyle}>
      <img className="event-card-image" src={props.pic} alt={props.alt} />
    </div></Link>
  );
}