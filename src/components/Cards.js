import "./CarouselsStyle.css";
import { Link } from "react-router-dom";
import { MovieCardsData } from "./MovieCardsData";

import React from "react";

export default function Product(props) {
  return (
    <div className="card">
    <img className="card-image" src={props.pic} alt={props.alt} />
    <div className="textHolder">
        <h6><b>{props.movie_name}</b></h6>
        <p className="cert">{props.certification}</p>
        <p className="lang">{props.languages}</p>
        <div classsName="Url">
                <Link to={props.url} id="movieLink"><span id="urlSpan">View</span></Link> 
        </div>
    </div>
</div>
  );
}