import "../../tabs/tabs.css";
import React from "react";

export default function CastCard(props) {
  return (
    <div className="cast-card">
        <img className="cast-card-image" src={props.pic} alt={props.alt} />
        <div className="textHolder">
            <h6>{props.cast_name}</h6>
            <p className="role">{props.role}</p>
        </div>
    </div>
  );
}