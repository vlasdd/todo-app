import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";
import TasksTypes from "../constants/tasks-types";
import ITask from "../interfaces/task";

class Tasks{
    allTasks: ITask[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    setAllTasks(allTasks: ITask[]){
        this.allTasks = allTasks
    }

    defineTasks(currentTab: TasksTypes) {
        if (currentTab === TasksTypes.All) {
            return this.allTasks
        }

        return this.allTasks.filter(task => task.type === currentTab)
    }

    createTask(wordEntering: string, currentTab: TasksTypes) {
        const newTask = {
            id: nanoid(),
            text: wordEntering,
            isDone: false,
            type: currentTab,
        }

        this.allTasks.push(newTask);
    }

    removeFromTasks(id: string){
        this.allTasks = this.allTasks.filter(task => task.id !== id);
    }

    toggleDone(id: string) {
        this.allTasks = this.allTasks.map(task => {
            if (task.id === id) {
                return { ...task, isDone: !task.isDone };
            }

            return task;
        })
    }
}

export default new Tasks();