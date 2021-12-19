import { VoidFunctionComponent } from 'react';
import { GearSpecTabs } from 'components';
import { useGearSpecs } from 'hooks';
import { CategoryType } from 'types/categories';

export const SnowRacePage: VoidFunctionComponent = () => {
  // Extract snow race specializations
  const specs = useGearSpecs(CategoryType.SnowRace);

  return <GearSpecTabs specs={specs} />;
};
