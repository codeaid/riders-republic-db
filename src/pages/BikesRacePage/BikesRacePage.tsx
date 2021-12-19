import { VoidFunctionComponent } from 'react';
import { GearSpecTabs } from 'components';
import { useGearSpecs } from 'hooks';
import { CategoryType } from 'types/categories';

export const BikesRacePage: VoidFunctionComponent = () => {
  // Extract bike race specializations
  const specs = useGearSpecs(CategoryType.BikeRace);

  return <GearSpecTabs specs={specs} />;
};
