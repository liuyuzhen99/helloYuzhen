import React from "react";
import BlogCardLayout from "./blogCardLayout";
import BlogNavbar from "./blogNavbar";
import "./blog.css";

function Blog() {
    return (
        <div className="blog">
            <BlogNavbar />
            <BlogCardLayout />
        </div>
    );
};

export default Blog;