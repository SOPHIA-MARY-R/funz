import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Cards/PremiereCard";
import { PremiereData, responsive } from "../JSON_Data/PremiereData";

//Premiere MultiCarousel
export default function PremiereMultiCarousel() {
  const card = PremiereData.map((premiere) => (
    <Card
      key={premiere.id}
      pic={premiere.pic}
      alt={premiere.alt}
      url={premiere.url}
      movie_name={premiere.movie_name}
      languages={premiere.languages}
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
