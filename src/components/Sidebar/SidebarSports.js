import "../../tabs/tabs.css";
import React from "react";
import SubMenuSports from "./SubMenuSports";

//Sidebar to filter
export default function SidebarSports(){
    return(
        <div className="sidebar">
            <SubMenuSports/>
        </div>
    );
}