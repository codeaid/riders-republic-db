import { useContext, useMemo, VoidFunctionComponent } from 'react';
import { GearSpecContext, GearSpecTabs } from 'components';
import { getCategorySpecs } from 'lib/specs';
import { CategoryType } from 'types/categories';

export const AirPage: VoidFunctionComponent = () => {
  // Retrieve all available specializations
  const specsList = useContext(GearSpecContext);

  // Extract air specializations
  const specs = useMemo(
    () => getCategorySpecs(specsList, CategoryType.Air),
    [specsList],
  );

  return <GearSpecTabs specs={specs} />;
};
