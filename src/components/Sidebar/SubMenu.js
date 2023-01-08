import React, {useState} from 'react';
import ToggleTag from '../Toggle_Tag/ToggleTag';
import { LangData } from '../JSON_Data/LangData';
import { GenreData } from '../JSON_Data/GenreData';
import { FormatData } from '../JSON_Data/FormatData';

//SubMenus for the side bar
export default function SubMenu(){
    //useSate ==> to re-render particular component & to track and update changes of state
    //toggle open and close of submenu
    const [open1, setOpen1] = useState(false); //useSate to track language filter
    const [open2, setOpen2] = useState(false); //useState to track genre filter
    const [open3, setOpen3] = useState(false); //useState to track format filter

    const toggle1 = LangData.map((language) => (
        <ToggleTag
        key={language.id}
        name={language.lang}
        classname={language.classname}
        />
    ));
    const toggle2 = GenreData.map((genre) => (
        <ToggleTag
        key={genre.id}
        name={genre.genre}
        classname={genre.classname}
        />
    ));
    const toggle3 = FormatData.map((format) => (
        <ToggleTag
        key={format.id}
        name={format.format}
        classname={format.classname}
        />
    ));
    return (
        <>
            {/* classname chanegs based on useSate value */}
            <div className={open1 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open1 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setOpen1(!open1)}/></span>
                            <span className="title">Languages</span>
                        </div>
                        <div className="sidebar-content">
                            {toggle1}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open2 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open2 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setOpen2(!open2)}/></span>
                            <span className="title">Genres</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle2}
                        </div>
                    </li>
                </ul>
            </div>
            <p/> {/* For spacing */}
            <div className={open3 ? "sidebar-menu open" : "sidebar-menu"}>
                <ul>
                    <li>
                        <div className={open3 ? "sidebar-title open" : "sidebar-title"}>
                            <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setOpen3(!open3)}/></span>
                            <span className="title">Format</span>                       
                        </div>
                        <div className="sidebar-content">
                            {toggle3}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}