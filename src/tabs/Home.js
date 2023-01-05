import Carousels from "../components/Carousels";
import MultiCarousel from "../components/MultiCarousel";
import './tabs.css'

export const Home = () => {
  return (
    <>
    <Carousels/>
    <h3 className="Topics">Recommended Movies</h3>
    <MultiCarousel/>
    <img className="ad" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="Ad"/>
    </>
  );
}