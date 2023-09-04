import { useState } from "react";
import Post from "../post/post";
import "./posts.css"


export default function Posts({ posts, handleLikeClick }) {

    function handlePostLikeClick(post) {
        handleLikeClick(post)
    }

    const postsCards = posts.map(post => <Post post={post} onLikeClick={handlePostLikeClick} key={post.id} />)

    return (
        <div className="post-container">
            {postsCards}
        </div>
    )
}