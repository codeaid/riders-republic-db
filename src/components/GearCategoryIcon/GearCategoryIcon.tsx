import { useMemo, VoidFunctionComponent } from 'react';
import { CategoryType } from 'types/categories';
import {
  GearCategoryIconAir,
  GearCategoryIconBikeRace,
  GearCategoryIconBikeTricks,
  GearCategoryIconBmx,
  GearCategoryIconSnowRace,
  GearCategoryIconSnowTricks,
  StyledGearCategoryIcon,
} from './GearCategoryIcon.styled';
import { GearCategoryIconProps } from './types';

export const GearCategoryIcon: VoidFunctionComponent<
  GearCategoryIconProps
> = props => {
  const { category } = props;

  // Pick icon associated with the current category
  const image = useMemo(() => {
    switch (category) {
      case CategoryType.Air:
        return <GearCategoryIconAir />;
      case CategoryType.BikeRace:
        return <GearCategoryIconBikeRace />;
      case CategoryType.BikeTricks:
        return <GearCategoryIconBikeTricks />;
      case CategoryType.Bmx:
        return <GearCategoryIconBmx />;
      case CategoryType.SnowRace:
        return <GearCategoryIconSnowRace />;
      case CategoryType.SnowTricks:
        return <GearCategoryIconSnowTricks />;
    }
  }, [category]);

  return (
    <StyledGearCategoryIcon $category={category}>
      {image}
    </StyledGearCategoryIcon>
  );
};
