import React from 'react';
import { SidebarData } from './SidebarData';
import ToggleTag from './ToggleTag';
import { LangData } from './LangData';
import { useState } from "react";

export default function SubMenu(){
    const [open, setOpen] = useState(false); //toggle open and close of cards

    const toggle = LangData.map((item) => (
        <ToggleTag
        key={item.id}
        name={item.name}
        />
    ));
    return (
        <div className={open ? "sidebar-menu open" : "sidebar-menu"}>
            <ul>
                <li>
                    <div className="sidebar-title">
                        <span className="title">Languages</span>
                        <span class="arrow"><i class="fa-solid fa-chevron-down" onClick={()=>setOpen(!open)}/></span>
                    </div>
                    <div className="sidebar-content">
                        {toggle}
                    </div>
                </li>
            </ul>
        </div>
            
    );
}