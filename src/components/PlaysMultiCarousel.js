import "./CarouselsStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./PlaysCard";
import { PlaysData, responsive } from "./PlaysData";

export default function App() {
  const card = PlaysData.map((item) => (
    <Card
      key={item.id}
      pic={item.pic}
      alt={item.alt}
      play_name={item.play_name}
      url={item.url}
      languages={item.languages}
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
