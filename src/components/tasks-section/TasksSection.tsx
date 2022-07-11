import React, { useState } from 'react'
import TasksTypes from '../../constants/tasks-types';
import useWindowWidth from '../../helpers/useWindowWidth';
import currentTab from '../../store/currentTab';
import Menu from '../../svgs/menu/Menu';
import Button from '../button/Button';
import Task from '../task/Task';
import Text from '../text/Text'
import TypesSection from '../types-section/TypesSection';
import Wrapper from '../wrapper/Wrapper';
import { StyledTaskInput, StyledTasksSection, TasksWrapper } from './TasksSection.styled';
import allTasks from "../../store/tasks";
import { observer } from 'mobx-react-lite';

const TasksSection: React.FC = observer(() => {
  const [wordEntering, setWordEntering] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const width = useWindowWidth();

  const tasks = allTasks.defineTasks(currentTab.currentTab);

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
              clickEvent={(type: TasksTypes) => {
                currentTab.setCurrentTab(type);
                setIsMenuOpen(false);
              }}
              border={false}
            />
          </Wrapper> :
          <>
            <StyledTaskInput
              placeholder={`Add a new task inside '${currentTab.currentTab}' category`}
              type="text"
              value={wordEntering}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWordEntering(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  allTasks.createTask(wordEntering, currentTab.currentTab);
                  setWordEntering("");
                }
              }}
            />
            {
              tasks.length ?
                <TasksWrapper width="100%" direction="column" gap="10px" items="start">
                  {
                    tasks.map(task => (
                      <Task
                        {...task}
                        key={task.id}
                      />
                    ))
                  }
                </TasksWrapper> :
                <Text color="#838386">You got no '{currentTab.currentTab}' tasks</Text>
            }
          </>
      }
    </StyledTasksSection>
  )
})

export default TasksSection