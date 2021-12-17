import { uniq, without } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import sha1 from 'sha1';
import { GearItem } from 'types/gear';

// Name of the local storage key containing marked gear
const storageKey = 'gear';

export const useGearItemPersistence = (item: GearItem) => {
  const [refresh, setRefresh] = useState(0);

  // Generate a unique hash for the specified gear item
  const hash = useMemo(() => {
    const parts = [item.category, item.spec, item.brand, item.model];
    const result = sha1(parts.join(':'));

    return result.substr(0, 8);
  }, [item]);

  /**
   * Get list of currently persisted gear items
   */
  const getPersistedItems = useCallback((): Array<string> => {
    // Read gear storage value
    const json = localStorage.getItem(storageKey);
    if (!json) {
      return [];
    }

    try {
      // Attempt to parse the value
      return JSON.parse(json);
    } catch (e) {
      return [];
    }
  }, []);

  // Flag indicating if the current gear item is persisted
  const isPersisted = useMemo(
    () => getPersistedItems().includes(hash),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getPersistedItems, hash, refresh],
  );

  /**
   * Persist current gear item to the storage
   */
  const persist = useCallback(() => {
    // Append current gear item's hash to the stored list
    const replacement = uniq([...getPersistedItems(), hash]);
    localStorage.setItem(storageKey, JSON.stringify(replacement));

    // Trigger internal value updates
    setRefresh(Date.now());
  }, [getPersistedItems, hash]);

  /**
   * Remove current gear item from the storage
   */
  const erase = useCallback(() => {
    // Remove current gear item's hash from the stored list
    const replacement = without(getPersistedItems(), hash);
    localStorage.setItem(storageKey, JSON.stringify(replacement));

    // Trigger internal value updates
    setRefresh(Date.now());
  }, [getPersistedItems, hash]);

  // Refresh values on mount
  useEffect(() => setRefresh(Date.now()), []);

  return {
    erase,
    isPersisted,
    persist,
  };
};
