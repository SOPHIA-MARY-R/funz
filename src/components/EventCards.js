import "./CarouselsStyle.css";
import { Link } from "react-router-dom";

import React from "react";

export default function EventCard(props) {
  return (
    <Link to={props.url}><div className="event-card">
      <img className="event-card-image" src={props.pic} alt={props.alt} />
    </div></Link>
  );
}