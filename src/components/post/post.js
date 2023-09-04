import { useState } from "react"
import "./post.css"
export default function Post({ post, onLikeClick }) {

    const [showMore, setShowMore] = useState(false);
    const [liked, setLiked] = useState(false)

    function handleShowMore() {
        setShowMore(!showMore);
    }

    function handleLikeClick() {
        post.likes = liked ? post.likes - 1 : post.likes + 1;
        setLiked(!liked);
        onLikeClick(post);
    }

    return (
        <div className="post-card">
            <h2> {post.title} </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={handleShowMore}>{showMore ? "hide" : "show More"} </button>
                <button onClick={handleLikeClick} className={liked && 'liked'} >Like {post.likes}</button>
            </div>
            {showMore && (<p>{post.content} </p>)}
        </div>
    )
}