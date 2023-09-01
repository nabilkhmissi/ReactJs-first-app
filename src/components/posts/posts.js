import Post from "../post/post";
import "./posts.css"


export default function Posts({ posts }) {

    const postsCards = posts.map(post => <Post post={post} key={post.id} />)

    return (
        <div className="post-container">
            {postsCards}
        </div>
    )
}