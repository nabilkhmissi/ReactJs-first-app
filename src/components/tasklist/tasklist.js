import Task from "../task/task"
import "./tasklist.css"
import AddTask from "../addTask/addTask"
import tasksReducer from "./tasksReducer";
import { useReducer } from "react";

export default function TaskList() {

    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask(title) {
        dispatch({
            type: 'add',
            id: nextId++,
            title: title,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'update',
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'delete',
            id: taskId,
        });
    }


    const taskList = tasks.map((t) => {
        return (<li>< Task
            task={t}
            key={t.id}
            handleTaskDelete={handleDeleteTask}
            handleTaskUpdate={handleChangeTask} /></li>
        )
    })

    return (
        <div className="tasklist-holder">
            <ul className="tasklist">
                <h1>Task list</h1>
                <AddTask
                    handleTaskAdd={handleAddTask} />
                {taskList}
            </ul>
        </div>
    )
}

let nextId = 3;
const initialTasks = [
    { id: 0, title: 'Visit Kafka Museum', done: true },
    { id: 1, title: 'Watch a puppet show', done: false },
    { id: 2, title: 'Lennon Wall pic', done: false },
];