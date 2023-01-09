import './tabs.css';
import CarouselStream from '../components/Carousels/CarouselStream';

//streams page
export default function Stream(){
    return (
        <>
            <div className="stream contents" >
                <div className="stream-carousel" ><CarouselStream/></div>
            </div> 
        </>
    );
}