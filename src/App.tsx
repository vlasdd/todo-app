import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import TasksSection from './components/tasks-section/TasksSection';
import TypesSection from './components/types-section/TypesSection';
import TasksTypes from "./constants/tasks-types";
import useWindowWidth from './helpers/useWindowWidth';
import allTasks from "./store/tasks";
import currentTab from './store/currentTab';

const AppWraper = styled.div`
width: ${(props: {width: number}) => props.width > 450 ? "70vw": "95vw"};
height: 80vh;
background: white;
border-radius: 5px; 
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
`

const App: React.FC = observer(() => {  
  const width = useWindowWidth();
  
  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      allTasks.setAllTasks(JSON.parse(localStorage.getItem("tasks") as string))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTasks.allTasks));
  }, [allTasks.allTasks, allTasks.allTasks.length]);

  return (
    <AppWraper width={width}>
      {
        width > 640 ?
          <TypesSection
            clickEvent={(type: TasksTypes) => {
              currentTab.setCurrentTab(type);
            }}
            border={true}
          /> :
          null
      }
      <TasksSection />
    </AppWraper>
  );
})

export default App;
