import Carousels from "../components/Carousels";
import './tabs.css'
import ToggleTag from "../components/ToggleTag";
import { LangData } from "../components/LangData";

export const Movies =()=> {
    const toggle = LangData.map((item) => (
        <ToggleTag
        key={item.id}
        name={item.name}
        />
    ));

    return (
        <>
        <Carousels/>
        <div className="sidebar">
            <div className="language">
            </div>
        </div>
        <div className="Carousel Container">
            {toggle}
        </div>
        </>
    );
}