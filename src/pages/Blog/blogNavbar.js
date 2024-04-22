import React from 'react';
import { FaBars } from 'react-icons/fa';
import SearchBar from '../../components/SearchBar';
import "./blogNavbar.css";

function BlogNavbar() {

    return (
        <header>
            <h3>Logo</h3>
            <SearchBar />
            <nav >
                <a href="/#">碎碎念</a>
                <a href="/#">读书有感</a>
                <a href="blog">优生文具</a>
                <a href="/#">关于我</a>
                <button className="nav-btn">
                    <FaBars />
                </button>
            </nav>
        </header>
    );
}

export default BlogNavbar;