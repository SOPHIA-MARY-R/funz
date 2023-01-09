import React from "react";
import "../../tabs/tabs.css";
import Card from "../Cards/SportsCard";
import { SportsData } from "../JSON_Data/SportsData";
import "../Cards/CardStyle.css";

//sports Grid
export default function GridSports(){
    const card = SportsData.map((sport) => (
        <Card
          key={sport.id}
          sport_name={sport.sport_name}
          pic={sport.pic}
          alt={sport.alt}
          category={sport.category}
          url={sport.url}
        />
      ));
    return(
        <div className="grid-container">
            {card}
        </div>
    );
}