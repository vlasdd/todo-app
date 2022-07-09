import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import React from 'react';
import TasksTypes from '../../constants/tasks-types';
import currentTab from '../../store/currentTab';
import Text from '../text/Text';
import { StyledTypesSection, TypesButton } from './TypesSection.styled';

interface ITypesSectionProps {
  border: boolean;
  clickEvent: (type: TasksTypes) => void;
}

const TypesSection: React.FC<ITypesSectionProps> = observer((props) => {
  return (
    <StyledTypesSection border={props.border}>
      {
        Object.values(TasksTypes).map(type => (
          <TypesButton
            isCurrent={type === currentTab.currentTab}
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
})

export default TypesSection