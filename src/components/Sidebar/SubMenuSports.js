import React, {useState} from 'react';
import ToggleTag from '../Toggle_Tag/ToggleTag';
import { PriceData } from '../JSON_Data/PriceData';
import { SportsCategoryData } from '../JSON_Data/SportsCategoryData';
import { DateData } from '../JSON_Data/DateData';

//SubMenus for the side bar
export default function SubMenu(){
    //useSate ==> to re-render particular component & to track and update changes of state
    //toggle open and close of submenu
    const [open14, setopen14] = useState(false); //useState to track Price filter
    const [open15, setopen15] = useState(false); //useState to track category filter
    const [open16, setopen16] = useState(false); //useState to track category filter

    const toggle5 = PriceData.map((price) => (
        <ToggleTag
        key={price.id}
        name={price.price}
        classname={price.classname}
        />
    ));
    const toggle6 = SportsCategoryData.map((category) => (
        <ToggleTag
            key={category.id}
            name={category.category}
            classname={category.classname}
        />
    ));
    const toggle11 = DateData.map((date) => (
        <ToggleTag
            key={date.id}
            name={date.date}
            classname={date.classname}
        />
    ));
    return (
        <>
            {/* classname chanegs based on useSate value */}
            <p/> {/* For spacing */}
            <div className={open14 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open14 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen14(!open14)}/></span>
                            <span className="title">Prices</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle5}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open15 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open15 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen15(!open15)}/></span>
                            <span className="title">Category</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle6}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open16 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open16 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setopen16(!open16)}/></span>
                            <span className="title">Date</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle11}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}