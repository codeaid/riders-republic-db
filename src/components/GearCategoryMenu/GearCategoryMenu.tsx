import { VoidFunctionComponent } from 'react';
import { StyledGearCategoryMenu } from './GearCategoryMenu.styled';
import { GearCategoryMenuItem } from './GearCategoryMenuItem';
import { GearCategoryMenuProps } from './types';

export const GearCategoryMenu: VoidFunctionComponent<
  GearCategoryMenuProps
> = props => {
  const { categories } = props;

  return (
    <StyledGearCategoryMenu>
      {categories.map(category => (
        <GearCategoryMenuItem category={category} key={category.type} />
      ))}
    </StyledGearCategoryMenu>
  );
};
