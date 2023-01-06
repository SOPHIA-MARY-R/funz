import "../tabs/tabs.css";
import React from "react";
import SubMenu from "./SubMenu";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <SubMenu/>
        </div>
    );
}