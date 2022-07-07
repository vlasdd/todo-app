import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import TasksTypes from '../../constants/tasks-types';
import useWindowWidth from '../../helpers/useWindowWidth';
import ITask from '../../interfaces/task';
import Menu from '../../svgs/menu/Menu';
import Button from '../button/Button';
import Task from '../task/Task';
import Text from '../text/Text'
import TypesSection from '../types-section/TypesSection';
import Wrapper from '../wrapper/Wrapper';
import { StyledTaskInput, StyledTasksSection, TasksWrapper } from './TasksSection.styled';

interface ITasksSectionProps {
  currentTab: TasksTypes;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  setCurrentTab: React.Dispatch<React.SetStateAction<TasksTypes>>;
}

const TasksSection: React.FC<ITasksSectionProps> = (props) => {
  const [wordEntering, setWordEntering] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const width = useWindowWidth();

  const createTask = () => {
    const newTask = {
      id: nanoid(),
      text: wordEntering,
      isDone: false,
      type: props.currentTab,
    }

    props.setTasks(prevTasks => [...prevTasks, newTask]);
    setWordEntering("");
  }

  const removeFromTasks = (id: string) => {
    props.setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  const toggleDone = (id: string) => {
    props.setTasks(prevTasks => prevTasks.map(task => {
      if(task.id === id){
        return {...task, isDone: !task.isDone};
      }

      return task;
    }))
  }

  return (
    <StyledTasksSection width={width}>
      <Wrapper width="100%" justify='space-between'>
        <Text size="26px" color="#000000" weight={700} margin="0 0 0 15px">
          All Tasks
        </Text>
        {
          width < 641 ?
            <Button onClick={() => setIsMenuOpen(prevVal => !prevVal)}>
              <Menu isOpen={isMenuOpen} />
            </Button> :
            null
        }
      </Wrapper>
      {
        isMenuOpen && width < 641 ?
          <Wrapper width="100%" height="60%">
            <TypesSection
              currentTab={props.currentTab}
              clickEvent={(type: TasksTypes) => {
                props.setCurrentTab(type);
                setIsMenuOpen(false);
              }}
              border={false}
            />
          </Wrapper> :
          <>
            <StyledTaskInput
              placeholder={`Add a new task inside '${props.currentTab}' category`}
              type="text"
              value={wordEntering}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWordEntering(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  createTask();
                }
              }}
            />
            {
              props.tasks.length ?
                <TasksWrapper width="100%" direction="column" gap="10px" items="start">
                  {
                    props.tasks.map(task => (
                      <Task
                        {...task}
                        removeFromTasks={() => removeFromTasks(task.id)}
                        toggleDone={toggleDone}
                        key={task.id}
                      />
                    ))
                  }
                </TasksWrapper> :
                <Text color="#838386">You got no '{props.currentTab}' tasks</Text>
            }
          </>
      }
    </StyledTasksSection>
  )
}

export default TasksSection