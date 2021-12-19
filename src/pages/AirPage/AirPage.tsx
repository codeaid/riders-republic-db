import { VoidFunctionComponent } from 'react';
import { GearSpecTabs } from 'components';
import { useGearSpecs } from 'hooks';
import { CategoryType } from 'types/categories';

export const AirPage: VoidFunctionComponent = () => {
  // Extract air specializations
  const specs = useGearSpecs(CategoryType.Air);

  return <GearSpecTabs specs={specs} />;
};
