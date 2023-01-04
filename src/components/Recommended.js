import Carousel from 'react-bootstrap/Carousel';
import "./CarouselsStyle.css";

function Recommended() {
  return (
    <Carousel variant="black">
      <Carousel.Item>
        <img
          className="recom d-block w-100"
          src="https://assets-in.bmscdn.com/recoms/cms/creatives/1672732337510_smileweb.jpg"
          alt="Stream"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Recommended;