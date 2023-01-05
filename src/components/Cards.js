import "./CarouselsStyle.css";
import { Link } from "react-router-dom";
import { MovieCardsData } from "./MovieCardsData";

import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.url} alt={props.alt} />
      <h2>{props.movie_name}</h2>
    </div>
  );
}