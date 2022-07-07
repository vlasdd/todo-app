import TasksTypes from "../constants/tasks-types";

interface ITask {
    id: string;
    text: string;
    isDone: boolean;
    type: TasksTypes;
}

export default ITask;