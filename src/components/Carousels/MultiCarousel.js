import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Cards/Cards";
import { MovieCardsData, responsive } from "../JSON_Data/MovieCardsData";

//Movies MultiCarousel
export default function MultiCarousel() {
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

  return (
    <div className="Carousel Container">
      <Carousel responsive={responsive}>
        {card}
      </Carousel>
    </div>
  );
}
