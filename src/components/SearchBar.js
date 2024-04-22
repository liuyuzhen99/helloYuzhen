import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchBar.css";

function SearchBar() {
    return (
        <div className="search-bar-container">
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input placeholder="Type to search..." />
            </div>
        </div>
    );
}

export default SearchBar;