import "./CarouselsStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Cards";
import { MovieCardsData, responsive } from "./MovieCardsData";

export default function App() {
  const card = MovieCardsData.map((item) => (
    <Card
      movie_name={item.movie_name}
      pic={item.pic}
      alt={item.alt}
      certification={item.certification}
      languages={item.languages}
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
