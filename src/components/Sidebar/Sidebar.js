import "../../tabs/tabs.css";
import React from "react";
import SubMenu from "./SubMenu";

//Sidebar to filter based on langusgaes, genres and formats
export default function Sidebar(){
    return(
        <div className="sidebar">
            <SubMenu/>
        </div>
    );
}