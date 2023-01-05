import "./CarouselsStyle.css";
import { Link } from "react-router-dom";

import React from "react";

export default function PremiereCard(props) {
  return (
    <Link to={props.url}><div className="card">
      <img className="card-image" src={props.pic} alt={props.alt} />
    </div></Link>
  );
}