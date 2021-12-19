import { useMemo } from 'react';
import { GearItemGrid, Tab, Tabs } from 'components';
import { useGearItemPersistence, useGearItems, useGearSpecs } from 'hooks';
import {
  getGearCategoryItems,
  getGearItemComparisonMap,
  getGearSpecItems,
} from 'lib/gear';
import { getCategorySpecs } from 'lib/specs';
import { CategoryType } from 'types/categories';
import { GearSpecTabsDescription } from './GearCategoryTabs.styled';
import { GearCategoryTabsProps } from './types';

export const GearCategoryTabs = <TCategoryType extends CategoryType>(
  props: GearCategoryTabsProps<TCategoryType>,
) => {
  const { category } = props;

  // Retrieve all available gear items
  const gear = useGearItems();

  // Retrieve all available gear specializations
  const specs = useGearSpecs();

  // Retrieve gear item persistence helpers
  const { toggleGearItemPersisted, isGearItemPersisted } =
    useGearItemPersistence();

  // Get items belonging to the current category and set their persistence flags
  const categoryItems = useMemo(
    () =>
      getGearCategoryItems(gear, category).map(item => ({
        ...item,
        owned: isGearItemPersisted(item),
      })),
    [category, gear, isGearItemPersisted],
  );

  // Get specializations belonging to the current category
  const categorySpecs = useMemo(
    () => getCategorySpecs(specs, category),
    [category, specs],
  );

  // Build a list of tab children
  const tabs = useMemo(
    () =>
      categorySpecs.map(spec => {
        // Get gear items belonging to the current specialization
        const specItems = getGearSpecItems(categoryItems, spec.type);

        // Generate tab label
        const owned = specItems.filter(item => item.owned);
        const label = `${spec.name} (${owned.length}/${specItems.length})`;

        // Build comparison map for all items in the current specialization
        const comparisonMap = getGearItemComparisonMap(specItems);

        return (
          <Tab key={spec.type} label={label}>
            <GearSpecTabsDescription>
              {spec.description}
            </GearSpecTabsDescription>
            <GearItemGrid
              comparisonMap={comparisonMap}
              items={specItems}
              onToggleItem={toggleGearItemPersisted}
            />
          </Tab>
        );
      }),
    [categoryItems, categorySpecs, toggleGearItemPersisted],
  );

  return <Tabs>{tabs}</Tabs>;
};
