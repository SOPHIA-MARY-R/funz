import "../Cards/CardStyle.css";
import { Link } from "react-router-dom";
import React from "react";

//Cards for sports
const CardStyle = {
  Container: {border: 'none'}
}

export default function SportsCard(props) {
  return (
    <Link to={props.url}><div className="card" style={CardStyle.Container}>
      <img className="card-image" src={props.pic} alt={props.alt} />
      <div className="textHolder">
          <h6><b>{props.sport_name}</b></h6>
          <p className="lang" style={CardStyle.Text}>{props.category}</p>
      </div>
    </div></Link>
  );
}