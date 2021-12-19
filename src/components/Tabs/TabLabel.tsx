import { FunctionComponent } from 'react';
import { StyledTabLabel } from './TabLabel.styled';
import { TabLabelProps } from './types';

export const TabLabel: FunctionComponent<TabLabelProps> = props => {
  const { active, children, onClick } = props;

  return (
    <StyledTabLabel $active={active} onClick={onClick}>
      {children}
    </StyledTabLabel>
  );
};
