import React from 'react';
import { FaBars } from 'react-icons/fa';
import "../styles/NavBar.css";
import SearchBar from './SearchBar';

function Navbar() {

    return (
        <header>
            <h3>Logo</h3>
            <SearchBar />
            <nav >
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="blog">Blog</a>
                <a href="/#">About me</a>
                <button className="nav-btn">
                    <FaBars />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;