import { useState } from "react";
import Post from "../post/post";
import "./posts.css"


export default function Posts({ posts, handleLikeClick }) {

    const [activeIndex, setActiveIndex] = useState(0);

    function handlePostLikeClick(post) {
        handleLikeClick(post)
    }

    function handleActive(post) {
        setActiveIndex(post.id);
    }

    const postsCards = posts.map(post => <Post post={post} toggleActive={handleActive} onLikeClick={handlePostLikeClick} isActive={activeIndex === post.id} key={post.id} />)

    return (
        <div className="post-container">
            {postsCards}
        </div>
    )
}