import { VoidFunctionComponent } from 'react';
import { GearSpecTabs } from 'components';
import { useGearSpecs } from 'hooks';
import { CategoryType } from 'types/categories';

export const BikesTricksPage: VoidFunctionComponent = () => {
  // Extract bike tricks specializations
  const specs = useGearSpecs(CategoryType.BikeTricks);

  return <GearSpecTabs specs={specs} />;
};
