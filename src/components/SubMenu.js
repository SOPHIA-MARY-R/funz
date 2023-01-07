import React from 'react';
import ToggleTag from './ToggleTag';
import { LangData } from './JSON_Data/LangData';
import { useState } from "react";
import { GenreData } from './JSON_Data/GenreData';
import { FormatData } from './JSON_Data/FormatData';

export default function SubMenu(){
    const [open1, setOpen1] = useState(false); //toggle open and close of cards
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const toggle1 = LangData.map((item) => (
        <ToggleTag
        key={item.id}
        name={item.lang}
        classname={item.classname}
        />
    ));
    const toggle2 = GenreData.map((item) => (
        <ToggleTag
        key={item.id}
        name={item.genre}
        classname={item.classname}
        />
    ));
    const toggle3 = FormatData.map((item) => (
        <ToggleTag
        key={item.id}
        name={item.format}
        classname={item.classname}
        />
    ));
    return (
        <>
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
            <p/>
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