import { uniq, without } from 'lodash';
import { useCallback } from 'react';
import { getGearItemHash } from 'lib/gear';
import { GearItem } from 'types/gear';
import { useStorage } from './useStorage';

/**
 * Various gear item related web storage helpers
 *
 * @param {string} storageKey Target storage key
 */
export const useGearItemPersistence = (storageKey = 'gear.owned') => {
  // List of currently persisted gear items
  const [persistedGearItems, setPersistedGearItems] = useStorage<Array<string>>(
    storageKey,
    [],
  );

  /**
   * Check if the specified gear item is currently persisted
   *
   * @param {GearItem} item Target gear item
   */
  const isGearItemPersisted = useCallback(
    (item: GearItem) => {
      // Generate hash of the target item and retrieve currently stored items
      const hash = getGearItemHash(item);
      return persistedGearItems.includes(hash);
    },
    [persistedGearItems],
  );

  /**
   * Persist a gear item to the storage
   *
   * @param {GearItem} item Target gear item
   */
  const setGearItemPersisted = useCallback(
    (item: GearItem) => {
      // Generate hash of the target item and retrieve currently stored items
      const hash = getGearItemHash(item);

      // Append current gear item's hash to the stored list
      const value = uniq([...persistedGearItems, hash]);
      setPersistedGearItems(value);
    },
    [persistedGearItems, setPersistedGearItems],
  );

  /**
   * Erase a gear item from the storage
   *
   * @param {GearItem} item Target gear item
   */
  const unsetGearItemPersisted = useCallback(
    (item: GearItem) => {
      // Generate hash of the target item and retrieve currently stored items
      const hash = getGearItemHash(item);

      // Remove current gear item's hash from the stored list
      const value = without(persistedGearItems, hash);
      setPersistedGearItems(value);
    },
    [persistedGearItems, setPersistedGearItems],
  );

  /**
   * Toggle current persistence state of the specified item
   *
   * @param {GearItem} item Target gear item
   */
  const toggleGearItemPersisted = useCallback(
    (item: GearItem) =>
      isGearItemPersisted(item)
        ? unsetGearItemPersisted(item)
        : setGearItemPersisted(item),
    [isGearItemPersisted, setGearItemPersisted, unsetGearItemPersisted],
  );

  return {
    isGearItemPersisted,
    setGearItemPersisted,
    toggleGearItemPersisted,
    unsetGearItemPersisted,
  };
};
