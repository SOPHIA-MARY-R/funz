import "../Carousels/CarouselsStyle.css";
import { Link } from "react-router-dom";

import React from "react";

const CardStyle = {
  Container: {border: 'none'}
}
export default function Card(props) {
  return (
    <div className="card" style={CardStyle.Container}>
      <Link to={props.url}>
        <img className="card-image" src={props.pic} alt={props.alt} />
      </Link>
      <div className="textHolder" style={CardStyle.Text}>
          <h6 style={CardStyle}><b>{props.movie_name}</b></h6>
          <p className="cert">{props.certification}</p>
          <p className="lang">{props.languages}</p>
      </div>
    </div>
  
  );
}