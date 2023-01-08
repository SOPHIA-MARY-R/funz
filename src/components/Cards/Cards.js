import "../Cards/CardStyle.css";
import { Link } from "react-router-dom";
import React from "react";

// Cards for movies
const CardStyle = {
  Container: {border: 'none'}
}

//the funtion is called by MultiCarousel
export default function Card(props) {
  return (
    <Link to={props.url}><div className="card" style={CardStyle.Container}>
        <img className="card-image" src={props.pic} alt={props.alt} />
        <div className="textHolder" style={CardStyle.Text}>
          <h6 style={CardStyle}><b>{props.movie_name}</b></h6>
          <p className="cert">{props.certification}</p>
          <p className="lang">{props.languages}</p>
        </div>
      </div>
    </Link>
  );
}