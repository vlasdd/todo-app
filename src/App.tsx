import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TasksSection from './components/tasks-section/TasksSection';
import TypesSection from './components/types-section/TypesSection';
import TasksTypes from "./constants/tasks-types";
import useWindowWidth from './helpers/useWindowWidth';
import ITask from './interfaces/task';

const AppWraper = styled.div`
width: ${(props: {width: number}) => props.width > 450 ? "70vw": "95vw"};
height: 80vh;
background: white;
border-radius: 5px; 
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
`

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TasksTypes>(TasksTypes.All);
  const [allTasks, setAllTasks] = useState<ITask[]>([]);
  
  const width = useWindowWidth();
  
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setAllTasks((JSON.parse(localStorage.getItem("tasks") as string)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }, [allTasks]);

  const defineTasks = () => {
    if (currentTab === TasksTypes.All) {
      return allTasks
    }

    return allTasks.filter(task => task.type === currentTab)
  }

  return (
    <AppWraper width={width}>
      {
        width > 640 ?
          <TypesSection
            currentTab={currentTab}
            clickEvent={(type: TasksTypes) => setCurrentTab(type)}
            border={true}
          /> :
          null
      }
      <TasksSection
        currentTab={currentTab}
        tasks={defineTasks()}
        setTasks={setAllTasks}
        setCurrentTab={setCurrentTab}
      />
    </AppWraper>
  );
}

export default App;
