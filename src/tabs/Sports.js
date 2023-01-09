import './tabs.css'
import ToggleTag from "../components/Toggle_Tag/ToggleTag";
import { SportsCategoryData } from "../components/JSON_Data/SportsCategoryData";
import SidebarSports from "../components/Sidebar/SidebarSports";
import GridSports from "../components/Grid/GridSports";

//sports page
export default function Sports(){
    const toggle = SportsCategoryData.map((play) => (
        <ToggleTag
            key={play.id}
            name={play.category}
            classname="round-toggle"
        />
    ));

    return (
        <>
            <div className="contents">
                <SidebarSports/>
                <div className="container">
                    {toggle}                
                    <div><GridSports/></div>
                </div>
            </div>
        </>
    );
}