import "./CarouselsStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./EventCards";
import { EventCardsData, responsive } from "../JSON_Data/EventCardsData";

export default function App() {
  const card = EventCardsData.map((item) => (
    <Card
      key={item.id}
      pic={item.pic}
      alt={item.alt}
      url={item.url}
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
