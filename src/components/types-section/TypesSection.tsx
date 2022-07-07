import { nanoid } from 'nanoid';
import React from 'react';
import TasksTypes from '../../constants/tasks-types';
import Text from '../text/Text';
import { StyledTypesSection, TypesButton } from './TypesSection.styled';

interface ITypesSectionProps {
  currentTab: TasksTypes;
  clickEvent: (type: TasksTypes) => void;
  border: boolean;
}

const TypesSection: React.FC<ITypesSectionProps> = (props) => {
  return (
    <StyledTypesSection border={props.border}>
      {
        Object.values(TasksTypes).map(type => (
          <TypesButton
            isCurrent={type === props.currentTab}
            onClick={() => props.clickEvent(type)}
            key={nanoid()}
          >
            <Text>
              {type}
            </Text>
          </TypesButton>
        ))
      }
    </StyledTypesSection>
  )
}

export default TypesSection