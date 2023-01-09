import './tabs.css'
import Carousels from "../components/Carousels/Carousels";
import ToggleTag from "../components/Toggle_Tag/ToggleTag";
import { EventCategoryData } from "../components/JSON_Data/EventCategoryData";
import SidebarEvents from "../components/Sidebar/SidebarEvents";
import GridEvents from "../components/Grid/GridEvents";

//Events page
export default function Plays(){
    const toggle = EventCategoryData.map((event) => (
        <ToggleTag
            key={event.id}
            name={event.eve}
            classname="round-toggle"
        />
    ));

    return (
        <>
            <Carousels/>
            <div className="contents">
                <SidebarEvents/>
                <div className="container">
                    {toggle}                
                    <div><GridEvents/></div>
                </div>
            </div>
        </>
    );
}