import React from "react";
import Card from '../../components/card';
import './blogCardLayout.css';

function BlogCardLayout() {
    return (
        <div className="card-layout">
            <Card imgSrc="https://picsum.photos/300/200" imgAlt="Card Alt 1" title="碎碎念" description="这里是日记" buttonText="learn more" link="cardPage" />
            <Card imgSrc="https://picsum.photos/300/200" imgAlt="Card Alt 2" title="读书有感" description="这里是读后感" buttonText="learn more" link="cardPage" />
            <Card imgSrc="https://picsum.photos/300/200" imgAlt="Card Alt 3" title="优生文具" description="这里是笔记" buttonText="learn more" link="cardPage" />
        </div>
    );
};

export default BlogCardLayout;