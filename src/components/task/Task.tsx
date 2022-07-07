import React, { useState } from 'react'
import TasksTypes from '../../constants/tasks-types';
import ITask from '../../interfaces/task'
import Checked from '../../svgs/checked-minus/Checked';
import Minus from '../../svgs/checked-minus/Minus';
import Trash from '../../svgs/trash/Trash';
import Button from '../button/Button';
import Text from '../text/Text';
import Wrapper from '../wrapper/Wrapper';
import { StyledCategoryLabel, TaskWrapper } from './Task.styled';

interface ITaskProps extends ITask {
    removeFromTasks: () => void;
    toggleDone: (id: string) => void;
}

const Task: React.FC<ITaskProps> = (props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <TaskWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            width="100%"
            justify="space-between"
        >
            <Wrapper gap="10px" width="calc(100% - 30px)" justify='start'>
                <Button onClick={() => props.toggleDone(props.id)}>
                    {
                        props.isDone ?
                            <Checked /> :
                            <Minus />
                    }
                </Button>
                <Wrapper width="calc(100% - 135px)" display='inline-block'>
                    <Text weight={400} size="14px" color="#5A5A5A">
                        {props.text}
                    </Text>
                </Wrapper>
                <StyledCategoryLabel>
                    <Text weight={400} size="12px" color="#FFFFFF">
                        {props.type === TasksTypes.All ? "Uncategorized" : props.type}
                    </Text>
                </StyledCategoryLabel>
            </Wrapper>
            {
                isHovered ?
                    <Button onClick={props.removeFromTasks}>
                        <Trash />
                    </Button> :
                    null
            }
        </TaskWrapper>
    )
}

export default Task