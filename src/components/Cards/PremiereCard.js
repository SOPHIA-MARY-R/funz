import "../Carousels/CarouselsStyle.css";
import { Link } from "react-router-dom";
import React from "react";

const CardStyle = {
  Container: {border: 'none'}
}
export default function PremiereCard(props) {
  return (
    <div className="card" style={CardStyle.Container}>
      <Link to={props.url}><img className="premiere-card-image" src={props.pic} alt={props.alt} /></Link>
      <div className="textHolder">
          <h6><b>{props.movie_name}</b></h6>
          <p className="lang">{props.languages}</p>
      </div>
    </div>
  );
}