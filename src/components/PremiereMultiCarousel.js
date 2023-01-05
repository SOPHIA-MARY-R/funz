import "./CarouselsStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./PremiereCard";
import { PremiereData, responsive } from "./PremiereData";

export default function App() {
  const card = PremiereData.map((item) => (
    <Card
      pic={item.pic}
      alt={item.alt}
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
