import { useContext, useRef, useState } from "react"
import "./post.css"
import { ModeContext } from "../context/modeContext"
export default function Post({ post, onLikeClick, isActive, toggleActive }) {

    const [liked, setLiked] = useState(false);
    const mode = useContext(ModeContext);
    let cardElement = useRef(null);

    function handleLikeClick() {
        post.likes = liked ? post.likes - 1 : post.likes + 1;
        setLiked(!liked);
        onLikeClick(post);
    }

    function changeMode() {
        if (mode !== "light_mode") {
            return {
                backgroundColor: '#575757',
                color: '#fff'
            }
        }
    }

    function changeButtonMode() {
        if (mode !== "light_mode") {
            return {
                backgroundColor: '#575757',
                color: '#fff',
                borderColor: '#fff'
            }
        }
    }


    function handleMouseOver() {
        cardElement.current.style.backgroundColor = "yellow"
    }


    function handleMouseLeave() {
        cardElement.current.style.backgroundColor = "white";
    }

    return (
        <div className="post-card" style={changeMode()} ref={cardElement} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <h2> {post.title} </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => { toggleActive(post) }} style={changeButtonMode()}>{isActive ? "hide" : "show More"} </button>
                <button onClick={handleLikeClick} className={liked ? 'liked' : ''} style={changeButtonMode()} >Like {post.likes}</button>
            </div>
            {isActive && (<p>{post.content} </p>)}
        </div>
    )
}