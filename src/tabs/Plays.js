import './tabs.css'
import ToggleTag from "../components/Toggle_Tag/ToggleTag";
import { PlaysCategoryData } from "../components/JSON_Data/PlaysCategoryData";
import SidebarPlays from "../components/Sidebar/SidebarPlays";
import GridPlays from "../components/Grid/GridPlays";

//plays page
export default function Plays(){
    const toggle = PlaysCategoryData.map((play) => (
        <ToggleTag
            key={play.id}
            name={play.category}
            classname="round-toggle"
        />
    ));

    return (
        <>
            <div className="contents">
                <SidebarPlays/>
                <div className="container">
                    {toggle}                
                    <div><GridPlays/></div>
                </div>
            </div>
        </>
    );
}