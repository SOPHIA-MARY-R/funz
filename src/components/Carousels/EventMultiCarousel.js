import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Cards/EventCards";
import { EventCardsData, responsive } from "../JSON_Data/EventCardsData";

//Events multicarousel
export default function EventMultiCarousel() {
  const card = EventCardsData.map((event) => (
    <Card
      key={event.id}
      pic={event.pic}
      alt={event.alt}
      url={event.url}
    />
  ));

  return (
    <div className="Carousel Container">
      <Carousel responsive={responsive}>
        {card}
      </Carousel>
    </div>
  );
}
