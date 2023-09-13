import { useState, useEffect } from "react";
import "./jsonPosts.css"

export default function JsonPosts() {
    const [posts, setPosts] = useState([])
    const [active, setActive] = useState(0);

    async function fetchPosts() {
        const results = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await results.json()
        setPosts(posts);
    }

    useEffect(() => {
        fetchPosts();
    })

    const footer = <div>posts : {posts.length}</div>

    function handleActive(id) {
        setActive(id)
    }

    return (
        <>
            <h1>Posts</h1>
            <div className='posts'>
                {posts.map(post => {
                    return (
                        <div className='post' key={post.id}>
                            <h2> # {post.id} - {post.title}</h2>
                            {(active === post.id) && < p > {post.body}</p>}
                            {active !== post.id && (<button onClick={() => handleActive(post.id)}>More...</button>)}

                        </div>
                    )
                })}
            </div >
            {footer}
        </>
    )
}
