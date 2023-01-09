import './tabs.css'
import ToggleTag from "../components/Toggle_Tag/ToggleTag";
import { EventCategoryData } from "../components/JSON_Data/EventCategoryData";
import SidebarEvents from "../components/Sidebar/SidebarEvents";
import GridEvents from "../components/Grid/GridEvents";

//Events page
export default function Events(){
    const toggle = EventCategoryData.map((event) => (
        <ToggleTag
            key={event.id}
            name={event.category}
            classname="round-toggle"
        />
    ));

    return (
        <>
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