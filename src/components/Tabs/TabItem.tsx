import { FunctionComponent } from 'react';
import { StyledTabItem } from './TabItem.styled';
import { TabItemProps } from './types';

export const TabItem: FunctionComponent<TabItemProps> = props => {
  const { active, children, onClick } = props;

  return (
    <StyledTabItem $active={active} onClick={onClick}>
      {children}
    </StyledTabItem>
  );
};
