import React, {useState} from 'react';
import ToggleTag from '../Toggle_Tag/ToggleTag';
import { LangData } from '../JSON_Data/LangData';
import { PriceData } from '../JSON_Data/PriceData';
import { EventCategoryData } from '../JSON_Data/EventCategoryData';

//SubMenus for the side bar
export default function SubMenu(){
    //useSate ==> to re-render particular component & to track and update changes of state
    //toggle open and close of submenu
    const [open4, setopen4] = useState(false); //useSate to track language filter
    const [open5, setopen5] = useState(false); //useState to track Price filter
    const [open6, setopen6] = useState(false); //useState to track format filter

    const toggle4 = LangData.map((language) => (
        <ToggleTag
        key={language.id}
        name={language.lang}
        classname={language.classname}
        />
    ));
    const toggle5 = PriceData.map((price) => (
        <ToggleTag
        key={price.id}
        name={price.price}
        classname={price.classname}
        />
    ));
    const toggle6 = EventCategoryData.map((category) => (
        <ToggleTag
        key={category.id}
        name={category.category}
        classname={category.classname}
        />
    ));
    return (
        <>
            {/* classname chanegs based on useSate value */}
            <div className={open4 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open4 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen4(!open4)}/></span>
                            <span className="title">Languages</span>
                        </div>
                        <div className="sidebar-content">
                            {toggle4}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open5 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open5 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen5(!open5)}/></span>
                            <span className="title">Prices</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle5}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open6 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open6 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen6(!open6)}/></span>
                            <span className="title">Category</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle6}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}