import { useState } from "react"
import "./post.css"
export default function Post({ post }) {

    const [showMore, setShowMore] = useState(false);

    function handleShowMore() {
        setShowMore(!showMore);
    }

    return (
        <div className="post-card">
            <h2> {post.title} </h2>
            <button onClick={handleShowMore}>{showMore ? "hide" : "show More"} </button>
            {showMore && (<p>{post.content} </p>)}
        </div>
    )
}