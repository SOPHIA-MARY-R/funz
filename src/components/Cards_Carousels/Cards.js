import "./CarouselsStyle.css";
import { Link } from "react-router-dom";

import React from "react";

const CardStyle = {
  Container: {border: 'none'},
  Text: {textDecoration: 'none'}
}
export default function Card(props) {
  return (
    <Link to={props.url}>
      <div className="card" style={CardStyle.Container}>
        <img className="card-image" src={props.pic} alt={props.alt} />
        <div className="textHolder" style={CardStyle.Text}>
            <h6 style={CardStyle}><b>{props.movie_name}</b></h6>
            <p className="cert" style={CardStyle.Text}>{props.certification}</p>
            <p className="lang" style={CardStyle.Text}>{props.languages}</p>
        </div>
      </div>
    </Link>
  );
}