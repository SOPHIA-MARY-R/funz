import XCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "../components/Cards";
import Card from 'react-bootstrap/Card';
import {MovieCardsData} from "../components/MovieCardsData"; 

export const MultiCarousels = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <XCarousel responsive={responsive}>
    {MovieCardsData.map((item, index) => {
        return (
        <Card style={{ width: '45%', height: '100%' }} key={index}>
        <Card.Img src={item.pic} />
        <Card.Body>
            <Card.Title>{item.movie_name}</Card.Title>
            <Card.Text>
            <p>{item.certification}</p>
            <p>{item.languages}</p>
            </Card.Text>
        </Card.Body>
        </Card>
    );
    })}
    </XCarousel>
    </>
  );
}