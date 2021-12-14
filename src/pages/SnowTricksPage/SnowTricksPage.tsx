import { useContext, useMemo, VoidFunctionComponent } from 'react';
import { GearSpecContext, GearSpecTabs } from 'components';
import { getCategorySpecs } from 'lib/specs';
import { CategoryType } from 'types/categories';

export const SnowTricksPage: VoidFunctionComponent = () => {
  // Retrieve all available specializations
  const specsList = useContext(GearSpecContext);

  // Extract snow tricks specializations
  const specs = useMemo(
    () => getCategorySpecs(specsList, CategoryType.SnowTricks),
    [specsList],
  );

  return <GearSpecTabs specs={specs} />;
};
