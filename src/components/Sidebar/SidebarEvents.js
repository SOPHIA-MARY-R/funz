import "../../tabs/tabs.css";
import React from "react";
import SubMenuEvents from "./SubMenuEvents";

//Sidebar to filter
export default function SidebarEvents(){
    return(
        <div className="sidebar">
            <SubMenuEvents/>
        </div>
    );
}