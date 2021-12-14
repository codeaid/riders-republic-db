import { GearItemGrid } from 'components';
import { useGearItems } from 'hooks';
import { GearSpec } from 'types/specs';
import { GearSpecTabProps } from './types';

export const GearSpecTab = <TGearSpec extends GearSpec>(
  props: GearSpecTabProps<TGearSpec>,
) => {
  const { spec } = props;

  // Retrieve gear items associated with the current specialization
  const items = useGearItems(spec.type);

  return <GearItemGrid items={items} />;
};
