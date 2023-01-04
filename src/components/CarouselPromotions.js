import Carousel from 'react-bootstrap/Carousel';
import "./CarouselsStyle.css";

function CarouselPromotions() {
  return (
    <Carousel variant="black">
      <Carousel.Item interval={1000}>
        <img
          className="promotion d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1672732337510_smileweb.jpg"
          alt="Stream"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="promotion d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1672137034486_ritvizweb.jpg"
          alt="Ritviz Promotion"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="promotion d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg"
          alt="Gpay Promotion"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPromotions;