import React from "react";
import "../styles/SideBar.css";
import { SidebarData } from "./SidebarData";

function Siderbar() {
    return (
        <div className="sidebar-container">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Siderbar;