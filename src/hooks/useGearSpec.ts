import { useContext, useMemo } from 'react';
import { GearSpecContext } from 'components';
import { SpecType } from 'types/specs';

export const useGearSpec = (type: SpecType) => {
  const specs = useContext(GearSpecContext);

  // Find gear associated with the specified specialization
  return useMemo(() => {
    const spec = specs.find(s => s.type === type);
    if (!spec) {
      throw new Error('Invalid specialization type specified');
    }

    return spec;
  }, [specs, type]);
};
