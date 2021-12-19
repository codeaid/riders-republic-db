import { VoidFunctionComponent } from 'react';
import { GearSpecTabs } from 'components';
import { useGearSpecs } from 'hooks';
import { CategoryType } from 'types/categories';

export const SnowTricksPage: VoidFunctionComponent = () => {
  // Extract snow tricks specializations
  const specs = useGearSpecs(CategoryType.SnowTricks);

  return <GearSpecTabs specs={specs} />;
};
