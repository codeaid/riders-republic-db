import { useContext, useMemo, VoidFunctionComponent } from 'react';
import { GearSpecContext, GearSpecTabs } from 'components';
import { getCategorySpecs } from 'lib/specs';
import { CategoryType } from 'types/categories';

export const SnowRacePage: VoidFunctionComponent = () => {
  // Retrieve all available specializations
  const specsList = useContext(GearSpecContext);

  // Extract snow race specializations
  const specs = useMemo(
    () => getCategorySpecs(specsList, CategoryType.SnowRace),
    [specsList],
  );

  return <GearSpecTabs specs={specs} />;
};
