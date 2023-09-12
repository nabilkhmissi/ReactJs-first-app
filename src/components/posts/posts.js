import { useContext, useState } from "react";
import Post from "../post/post";
import "./posts.css"
import { ModeContext } from "../context/modeContext";
import Notes from "../notes/notes";
import VideoPlayer from "../videoPlayer/videoPlayer";


export default function Posts({ posts, handleLikeClick }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const mode = useContext(ModeContext);
    const [isPlaying, setIsPlaying] = useState(false);

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
            <div className="player" onClick={() => setIsPlaying(!isPlaying)}>
                <VideoPlayer
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    isPlaying={isPlaying} />
            </div>
            <Notes />
            {postsCards}
        </div>
    )
}