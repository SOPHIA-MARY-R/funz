import Carousels from "../components/Carousels";
import {MultiCarousels} from "../components/MultiCarousels";

export const Home = () => {
  return (
    <>
    <Carousels/>
    <h3 className="Topics">Recommended Movies</h3>
    <MultiCarousels/>
    </>
    
  );
}