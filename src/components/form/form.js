import { useState } from "react";
import "./form.css";
export default function Form({ handleClick }) {

    let index = 100;
    const [post, setPost] = useState({ id: index++, title: '', content: '' })

    function handleKeyUp(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        handleClick(post)
    }

    return (
        <div className="form" onSubmit={handleFormSubmit}>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleKeyUp} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" name="content" onChange={handleKeyUp} />
                </div>

                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
                <p> id : {post.id}</p>
                <p>title : {post.title}</p>
                <p> description : {post.content}</p>

            </form>
        </div>
    )
}