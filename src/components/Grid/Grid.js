import React from "react";
import "../../tabs/tabs.css";
import Card from "../Cards/Cards";
import { MovieCardsData } from "../JSON_Data/MovieCardsData";
import "../Carousels/CarouselsStyle.css";

export default function Grid(){
    const card = MovieCardsData.map((item) => (
        <Card
          key={item.id}
          movie_name={item.movie_name}
          pic={item.pic}
          alt={item.alt}
          certification={item.certification}
          languages={item.languages}
          url={item.url}
        />
      ));
    return(
        <div className="grid-container">
            {card}
        </div>
    );
}