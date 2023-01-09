import React from "react";
import "../../tabs/tabs.css";
import Card from "../Cards/PlaysCard";
import { PlaysData } from "../JSON_Data/PlaysData";
import "../Cards/CardStyle.css";

//plays Grid
export default function GridPlays(){
    const card = PlaysData.map((play) => (
        <Card
          key={play.id}
          play_name={play.play_name}
          pic={play.pic}
          alt={play.alt}
          languages={play.languages}
          url={play.url}
        />
      ));
    return(
        <div className="grid-container">
            {card}
        </div>
    );
}