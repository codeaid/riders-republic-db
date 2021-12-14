import { VoidFunctionComponent } from 'react';
import { Ellipsis, GearCategoryIcon } from 'components';
import {
  GearCategoryMenuItemLabel,
  StyledGearCategoryMenuItem,
} from './GearCategoryMenuItem.styled';
import { GearCategoryMenuItemProps } from './types';

export const GearCategoryMenuItem: VoidFunctionComponent<
  GearCategoryMenuItemProps
> = props => {
  const { category } = props;

  return (
    <StyledGearCategoryMenuItem exact={true} strict={true} to={category.path}>
      <GearCategoryIcon category={category.type} />
      <GearCategoryMenuItemLabel>
        <Ellipsis>{category.name}</Ellipsis>
      </GearCategoryMenuItemLabel>
    </StyledGearCategoryMenuItem>
  );
};
