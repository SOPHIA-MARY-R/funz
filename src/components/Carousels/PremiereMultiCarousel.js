import "./CarouselsStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Cards/PremiereCard";
import { PremiereData, responsive } from "../JSON_Data/PremiereData";

export default function App() {
  const card = PremiereData.map((item) => (
    <Card
      key={item.id}
      pic={item.pic}
      alt={item.alt}
      url={item.url}
      movie_name={item.movie_name}
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
