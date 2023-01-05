import "./CarouselsStyle.css";
import { Link } from "react-router-dom";

import React from "react";

export default function PlaysCard(props) {
  return (
    <Link to={props.url}><div className="card">
      <img className="card-image" src={props.pic} alt={props.alt} />
      <div className="textHolder">
          <h6><b>{props.play_name}</b></h6>
          <p className="lang">{props.languages}</p>
      </div>
    </div></Link>
  );
}