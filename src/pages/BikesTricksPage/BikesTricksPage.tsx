import { useContext, useMemo, VoidFunctionComponent } from 'react';
import { GearSpecContext, GearSpecTabs } from 'components';
import { getCategorySpecs } from 'lib/specs';
import { CategoryType } from 'types/categories';

export const BikesTricksPage: VoidFunctionComponent = () => {
  // Retrieve all available specializations
  const specsList = useContext(GearSpecContext);

  // Extract bike tricks specializations
  const specs = useMemo(
    () => getCategorySpecs(specsList, CategoryType.BikeTricks),
    [specsList],
  );

  return <GearSpecTabs specs={specs} />;
};
