import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Cards/PlaysCard";
import { PlaysData, responsive } from "../JSON_Data/PlaysData";

//Plays MultiCarousel
export default function PlaysMultiCarousel() {
  const card = PlaysData.map((play) => (
    <Card
      key={play.id}
      pic={play.pic}
      alt={play.alt}
      play_name={play.play_name}
      url={play.url}
      languages={play.languages}
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
