import "../Carousels/CarouselsStyle.css";
import { Link } from "react-router-dom";

import React from "react";
const CardStyle = {
  Container: {border: 'none'},
  Text: {textDecoration: 'none'}
}
export default function PremiereCard(props) {
  return (
    <Link to={props.url}><div className="card" style={CardStyle.Container}>
      <img className="card-image" src={props.pic} alt={props.alt} />
      <div className="textHolder">
          <h6><b>{props.movie_name}</b></h6>
          <p className="lang">{props.languages}</p>
      </div>
    </div></Link>
  );
}