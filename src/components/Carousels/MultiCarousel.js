import "./CarouselsStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Cards/Cards";
import { MovieCardsData, responsive } from "../JSON_Data/MovieCardsData";

export default function App() {
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

  return (
    <div className="Carousel Container">
      <Carousel responsive={responsive}>
        {card}
      </Carousel>
    </div>
  );
}
