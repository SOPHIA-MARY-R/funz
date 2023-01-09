import React, {useState} from 'react';
import ToggleTag from '../Toggle_Tag/ToggleTag';
import { LangData } from '../JSON_Data/LangData';
import { PriceData } from '../JSON_Data/PriceData';
import { PlaysCategoryData } from '../JSON_Data/PlaysCategoryData';
import { DateData } from '../JSON_Data/DateData';

//SubMenus for the side bar
export default function SubMenu(){
    //useSate ==> to re-render particular component & to track and update changes of state
    //toggle open and close of submenu
    const [open7, setopen7] = useState(false); //useSate to track language filter
    const [open8, setopen8] = useState(false); //useState to track Price filter
    const [open9, setopen9] = useState(false); //useState to track category filter
    const [open10, setopen10] = useState(false); //useState to track date filter

    const toggle7 = LangData.map((language) => (
        <ToggleTag
        key={language.id}
        name={language.lang}
        classname={language.classname}
        />
    ));
    const toggle8 = PriceData.map((price) => (
        <ToggleTag
        key={price.id}
        name={price.price}
        classname={price.classname}
        />
    ));
    const toggle9 = PlaysCategoryData.map((category) => (
        <ToggleTag
            key={category.id}
            name={category.category}
            classname={category.classname}
        />
    ));
    const toggle10 = DateData.map((date)=>(
        <ToggleTag
            key={date.id}
            name={date.date}
            classname={date.classname}
        />
    ));
    return (
        <>
            {/* classname chanegs based on useSate value */}
            <div className={open7 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open7 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen7(!open7)}/></span>
                            <span className="title">Languages</span>
                        </div>
                        <div className="sidebar-content">
                            {toggle7}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open8 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open8 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen8(!open8)}/></span>
                            <span className="title">Prices</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle8}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open9 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open9 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen9(!open9)}/></span>
                            <span className="title">Category</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle9}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open10 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open10 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen10(!open10)}/></span>
                            <span className="title">Date</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle10}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}