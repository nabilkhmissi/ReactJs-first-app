import { useState } from "react"

export default function AddTask({ handleTaskAdd }) {

    const [title, setTitle] = useState("");

    function handleInputChange(e) {
        setTitle(e.target.value)
    }

    return (
        <div className="addTask">
            <span><strong>Add Task</strong></span>
            <input placeholder="add task" onChange={handleInputChange} />
            <button onClick={() => handleTaskAdd(title)}>Add</button>
        </div>
    )
}