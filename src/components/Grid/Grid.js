import React from "react";
import "../../tabs/tabs.css";
import Card from "../Cards/Cards";
import { MovieCardsData } from "../JSON_Data/MovieCardsData";
import "../Cards/CardStyle.css";

//Movies Grid
export default function Grid(){
    const card = MovieCardsData.map((movie) => (
        <Card
          key={movie.id}
          movie_name={movie.movie_name}
          pic={movie.pic}
          alt={movie.alt}
          certification={movie.certification}
          languages={movie.languages}
          url={movie.url}
        />
      ));
    return(
        <div className="grid-container">
            {card}
        </div>
    );
}