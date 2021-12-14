import { useContext, useMemo, VoidFunctionComponent } from 'react';
import { GearSpecContext, GearSpecTabs } from 'components';
import { getCategorySpecs } from 'lib/specs';
import { CategoryType } from 'types/categories';

export const BikesRacePage: VoidFunctionComponent = () => {
  // Retrieve all available specializations
  const specsList = useContext(GearSpecContext);

  // Extract bike race specializations
  const specs = useMemo(
    () => getCategorySpecs(specsList, CategoryType.BikeRace),
    [specsList],
  );

  return <GearSpecTabs specs={specs} />;
};
