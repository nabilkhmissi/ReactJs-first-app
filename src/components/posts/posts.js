import { useContext, useState } from "react";
import Post from "../post/post";
import "./posts.css"
import { ModeContext } from "../context/modeContext";
import Notes from "../notes/notes";


export default function Posts({ posts, handleLikeClick }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const mode = useContext(ModeContext);

    function handlePostLikeClick(post) {
        handleLikeClick(post)
    }

    function handleActive(post) {
        setActiveIndex(post.id);
    }

    function setMode() {
        if (mode !== "light_mode") {
            return {
                backgroundColor: '#333'
            }
        }
    }

    const postsCards = posts.map(post => {
        return <Post
            post={post}
            toggleActive={handleActive}
            onLikeClick={handlePostLikeClick}
            isActive={activeIndex === post.id}
            key={post.id} />
    })

    return (
        <div className="post-container" style={setMode()}>
            <Notes />
            {postsCards}
        </div>
    )
}