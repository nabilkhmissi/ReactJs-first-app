import { useState } from "react";
import "./task.css";

export default function Task({ task, handleTaskDelete, handleTaskUpdate }) {

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(task.title)

    function onUpdate() {
        if (editMode) {
            handleTaskUpdate({ ...task, title: title })
            setEditMode(false)
        } else {
            setEditMode(true)
        }
    }

    function handleInputChange(e) {
        setTitle(e.target.value)
    }

    let editButton = editMode ? 'save' : 'edit'

    return (
        <div className="task">
            <input type="checkbox" value={task.done} />
            {editMode ? <input type="text" value={title} onChange={handleInputChange} /> : <p>{title} </p>}
            <button onClick={onUpdate}>{editButton}</button>
            <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
        </div >
    )
}