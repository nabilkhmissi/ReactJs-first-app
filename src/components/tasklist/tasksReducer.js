export default function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'add': {
            return [
                ...tasks,
                {
                    id: action.id,
                    title: action.title,
                    done: false,
                },
            ];
        }
        case 'update': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'delete': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
