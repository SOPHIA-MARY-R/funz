import '../tabs.css'
import Carousels from "../../components/Carousels/Carousels";
import ToggleTag from "../../components/Toggle_Tag/ToggleTag";
import { LangData } from "../../components/JSON_Data/LangData";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid from "../../components/Grid/Grid";

//Movies page
export default function Movies(){
    const toggle = LangData.map((language) => (
        <ToggleTag
            key={language.id}
            name={language.lang}
            classname="round-toggle"
        />
    ));

    return (
        <>
            <Carousels/>
            <div className="contents">
                <div className="coming-soon">
                    <img className="premiere" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/coming-soon-web-collection-202012090733.png" alt="movies soon"/>
                </div>
                <Sidebar/>
                <div className="container">
                    {toggle}                
                    <div><Grid/></div>
                </div>
            </div>
        </>
    );
}