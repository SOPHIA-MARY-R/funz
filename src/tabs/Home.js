import Carousels from "../components/Carousels/Carousels";
import MultiCarousel from "../components/Carousels/MultiCarousel";
import EventMultiCarousel from "../components/Carousels/EventMultiCarousel";
import './tabs.css'
import PremiereMultiCarousel from "../components/Carousels/PremiereMultiCarousel";
import PlaysMultiCarousel from "../components/Carousels/PlaysMultiCarousel";

export const Home = () => {
  return (
    <>
    <Carousels/>
    <br/><br/>
    <div className="contents">
      <h3 className="Topics">Recommended Movies</h3>
      <MultiCarousel/>
      <br/><br/>
      <img className="ad" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="Ad"/>
      <br/><br/>
      <h3 className="Topics">The Best of Live events</h3>
      <EventMultiCarousel/>
      <br/><br/>
    </div>
    <img className="premiere" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Premiere"/>
    <div class="premierebg">
      <PremiereMultiCarousel/>
    </div>
    <br/><br/>
    <div className="contents">
      <h3 className="Topics">The Latest Plays</h3>
      <PlaysMultiCarousel/>
    </div>
    </>
  );
}