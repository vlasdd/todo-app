import { makeAutoObservable } from "mobx";
import TasksTypes from "../constants/tasks-types";

interface ICurrentTab{
    currentTab: TasksTypes;
    setCurrentTab: (currentTab: TasksTypes) => void;
}

class CurrentTab implements ICurrentTab{
    currentTab: TasksTypes = TasksTypes.All;

    constructor(){
        makeAutoObservable(this);
    }
    
    setCurrentTab(currentTab: TasksTypes){
        this.currentTab = currentTab;
    }
}

export default new CurrentTab()