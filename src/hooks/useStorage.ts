import { useCallback, useState } from 'react';

type UseStorageSetter<TValue> = (value?: TValue) => void;

/**
 * Create a local storage value manager for an item with the specified key
 *
 * @param {string} key Local storage key name
 * @param {*} initialValue Initial value to use if key is not present
 */
export const useStorage = <TValue>(key: string, initialValue?: TValue) => {
  // State value backed by the original value in the local storage
  const [storedValue, setStoredValue] = useState<TValue | undefined>(() => {
    // Attempt to read the value
    const json = localStorage.getItem(key);
    if (!json) {
      return initialValue;
    }

    try {
      return JSON.parse(json);
    } catch (e) {
      return initialValue;
    }
  });

  /**
   * Update local storage value
   *
   * @param {*} value Target value
   */
  const setValue = useCallback(
    (value?: TValue) => {
      try {
        if (typeof value !== 'undefined') {
          // Persist the encoded value
          const json = JSON.stringify(value);
          localStorage.setItem(key, json);
        } else {
          // Clear value is it's empty
          localStorage.removeItem(key);
        }

        setStoredValue(value);
      } catch (e) {}
    },
    [key],
  );

  return [storedValue, setValue] as [TValue, UseStorageSetter<TValue>];
};
