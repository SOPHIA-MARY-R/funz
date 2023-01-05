import Carousels from "../components/Carousels";
import './tabs.css'
import ToggleTag from "../components/ToggleTag";
import { langData } from "../components/langData";

export const Movies =()=> {
    const toggle = langData.map((item) => (
        <ToggleTag
        id={item.id}
        lang={item.lang}
        />
    ));

    return (
        <>
        <Carousels/>
        <div className="Carousel Container">
            {toggle}
        </div>
        </>
    );
}