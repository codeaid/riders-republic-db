import { derived, writable } from 'svelte/store';
import {
  createDatabaseAsync,
  deleteOwnedGearAsync,
  hasOwnedGearAsync,
  importLegacyStorageDataAsync,
  insertOwnedGearAsync,
  readLegacyStorageAsync,
  readOwnedGearAsync,
} from './db';

// Store containing a flag indicating if the initial store loading has been completed
const gearStoreReady = writable<boolean>(false);

// Main gear ownership store
const gearStore = writable<string[]>([], set => {
  createDatabaseAsync()
    .then(readLegacyStorageAsync)
    .then(importLegacyStorageDataAsync)
    .then(readOwnedGearAsync)
    .then(data => {
      // Update store value and mark store as ready to hide the loading indicator
      set(data);
      gearStoreReady.set(true);
    });
});

/**
 * Subscribe to all writes to the main gear store
 */
export const gearStoreSubscribe = () => gearStore.subscribe(() => {});

/**
 * Toggle presence of the specified hash in the gear store
 *
 * @param hash Target hash to toggle
 */
export const gearStoreToggleAsync = async (hash: string) => {
  // Check if the specified item exists in IndexedDB
  const owned = await hasOwnedGearAsync(hash);

  if (!owned) {
    await insertOwnedGearAsync(hash);
  } else {
    await deleteOwnedGearAsync(hash);
  }

  gearStore.update(current => {
    const set = new Set(current);

    // Add the item to the list if it's not present or remove it if it is
    if (owned) {
      set.delete(hash);
    } else {
      set.add(hash);
    }

    return [...set];
  });
};

// Store containing a Set object with persisted gear item hashes
export const ownedGearStore = derived(gearStore, value => new Set(value));

// Store containing the read-only readiness flag
export const ownedGearStoreReady = derived(gearStoreReady, value => value);
