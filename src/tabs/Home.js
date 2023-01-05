import Carousels from "../components/Carousels";
import MultiCarousel from "../components/MultiCarousel";

export const Home = () => {
  return (
    <>
    <Carousels/>
    <h3 className="Topics">Recommended Movies</h3>
    <MultiCarousel/>
    </>
  );
}