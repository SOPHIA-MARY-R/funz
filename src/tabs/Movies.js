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
            <Sidebar/>
            <div className="container">
                {toggle}
                <div><Grid/></div>
            </div>
        </div>
        </>
    );
}