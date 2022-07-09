import { makeAutoObservable } from "mobx";
import TasksTypes from "../constants/tasks-types";

class CurrentTab {
    currentTab: TasksTypes = TasksTypes.All;

    constructor(){
        makeAutoObservable(this);
    }
    
    setCurrentTab(currentTab: TasksTypes){
        this.currentTab = currentTab;
    }
}

export default new CurrentTab()