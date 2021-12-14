import { useContext, useMemo } from 'react';
import { GearItemContext } from 'components';
import { getGearSpecItems } from 'lib/gear';
import { SpecType } from 'types/specs';

export const useGearItems = <TSpecType extends SpecType>(spec: TSpecType) => {
  const gear = useContext(GearItemContext);

  return useMemo(() => getGearSpecItems(gear, spec), [gear, spec]);
};
