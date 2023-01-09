import React from "react";
import "../../tabs/tabs.css";
import Card from "../Cards/CardEvents";
import { EventsData } from "../JSON_Data/EventsData";
import "../Cards/CardStyle.css";

//events Grid
export default function GridEvents(){
    const card = EventsData.map((event) => (
        <Card
          key={event.id}
          event_name={event.event_name}
          pic={event.pic}
          alt={event.alt}
          category={event.category}
          url={event.url}
        />
      ));
    return(
        <div className="grid-container">
            {card}
        </div>
    );
}