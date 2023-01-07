import Carousels from "../components/Carousels";
import './tabs.css'
import ToggleTag from "../components/ToggleTag";
import { LangData } from "../components/LangData";
import Sidebar from "../components/Sidebar";
import Grid from "../components/Grid";

export const Movies =()=> {
    const toggle = LangData.map((item) => (
        <ToggleTag
        key={item.id}
        name={item.lang}
        classname="round-toggle"
        />
    ));

    return (
        <>
        <Carousels/>
        <div className="contents">
        <div><img className="premiere" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/coming-soon-web-collection-202012090733.png" alt="movies soon"/></div>
            <Sidebar/>
            <div className="container">
                {toggle}                
                <div><Grid/></div>
            </div>
        </div>
        </>
    );
}