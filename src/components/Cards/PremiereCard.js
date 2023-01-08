import "../Cards/CardStyle.css";
import { Link } from "react-router-dom";
import React from "react";

//Cards for Premiere
const CardStyle = {
  Container: {border: 'none'}
}

export default function PremiereCard(props) {
  return (
    <Link to={props.url}><div className="card" style={CardStyle.Container}>
      <img className="premiere-card-image" src={props.pic} alt={props.alt} />
      <div className="textHolder">
          <h6><b>{props.movie_name}</b></h6>
          <p className="lang">{props.languages}</p>
      </div>
    </div></Link>
  );
}