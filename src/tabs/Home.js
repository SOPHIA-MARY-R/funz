import Carousels from "../components/Carousels";
import MultiCarousel from "../components/MultiCarousel";
import EventMultiCarousel from "../components/EventMultiCarousel";
import './tabs.css'
import PremiereMultiCarousel from "../components/PremiereMultiCarousel";

export const Home = () => {
  return (
    <>
    <Carousels/>
    <div className="contents">
      <h3 className="Topics">Recommended Movies</h3>
      <MultiCarousel/>
      <img className="ad" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="Ad"/>
      <h3 className="Topics">The Best of Live events</h3>
      <EventMultiCarousel/>
      </div>
      <img className="premiere" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Premiere"/>
      <div class="premierebg">
        <PremiereMultiCarousel/>
      </div>
    
    </>
  );
}