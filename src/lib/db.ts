import type { OwnedGearRow } from '@/types/db';

let db: IDBDatabase;

const DB_NAME = 'RidersRepublicGearDB';
const DB_STORE_OWNED_GEAR = 'OwnedGear';
const LEGACY_STORAGE_KEY = 'gear.owned';

/**
 * Initialise the IndexedDB database instance
 */
export const createDatabaseAsync = () =>
  new Promise<IDBDatabase>((resolve, reject) => {
    // Ensure IndexedDB is available before proceeding
    if (typeof window === 'undefined' || typeof window.indexedDB === 'undefined') {
      throw new Error('IndexedDB is not available');
    }

    // Create a request to open the database
    const request = window.indexedDB.open(DB_NAME);

    // Listen for successful connections
    request.addEventListener('success', event => {
      db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    });

    // Listen for errors while opening the connection
    request.addEventListener('error', event => {
      console.error('Failed connecting to IndexedDB');
      reject(event);
    });

    // Database needs initialisation or upgrading
    request.addEventListener('upgradeneeded', event => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Handle errors during database initialisations
      db.addEventListener('error', () => {
        console.error('Error creating IndexedDB database');
      });

      // Initialise owned gear store
      db.createObjectStore(DB_STORE_OWNED_GEAR, {
        autoIncrement: false,
        keyPath: 'hash',
      });
    });
  });

/**
 * Read contents of the legacy local storage key if it's present
 */
export const readLegacyStorageAsync = () => {
  // Check if the legacy key is present in local storage
  const legacyJson = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (legacyJson === null) {
    return;
  }

  return JSON.parse(legacyJson) as string[];
};

/**
 * Write legacy data to IndexedDB
 *
 * @param values List of values read from the legacy local storage key
 */
export const importLegacyStorageDataAsync = async (values?: string[]) => {
  // No values to import, skip
  if (!values) {
    return;
  }

  const transaction = db.transaction(DB_STORE_OWNED_GEAR, 'readwrite');
  const store = transaction.objectStore(DB_STORE_OWNED_GEAR);

  // Queue a list of rows to be written to the database
  values
    .map<OwnedGearRow>(hash => ({ hash, createdAt: new Date() }))
    .forEach(row => store.put(row));

  // Remove the legacy local storage key upon successful import
  transaction.addEventListener('complete', () => {
    console.info('Legacy data successfully imported');
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  });

  // Handle error during the import and keep the legacy local storage key intact
  transaction.addEventListener('error', () => {
    console.error('Error importing legacy data');
  });

  // Persist all pending changes
  console.info('Importing legacy data');
  transaction.commit();
};

/**
 * Read list of owned gear item hashes from the IndexedDB database
 */
export const readOwnedGearAsync = () =>
  new Promise<string[]>((resolve, reject) => {
    // Read contents of the owned gear store
    const request = db
      .transaction(DB_STORE_OWNED_GEAR, 'readonly')
      .objectStore(DB_STORE_OWNED_GEAR)
      .getAll();

    request.addEventListener('success', event => {
      const hashes = (event.target as IDBRequest<OwnedGearRow[]>).result.map(row => row.hash);
      resolve(hashes);
    });

    request.addEventListener('error', event => {
      console.error('Error reading owned gear rows', event);
      reject(event);
    });
  });

/**
 * Check if the specified hash exists in the database
 *
 * @param hash Target hash to check
 */
export const hasOwnedGearAsync = (hash: string) =>
  new Promise<boolean>((resolve, reject) => {
    // Initialize a request  for the owned gear store
    const request = db
      .transaction(DB_STORE_OWNED_GEAR, 'readonly')
      .objectStore(DB_STORE_OWNED_GEAR)
      .get(hash);

    // Remove the legacy local storage key upon successful import
    request.addEventListener('success', () => {
      resolve(typeof request.result !== 'undefined');
    });

    // Handle error during the import and keep the legacy local storage key intact
    request.addEventListener('error', event => {
      console.log('Error looking up owned gear item', event);
      reject(event);
    });
  });

/**
 * Insert a new owned gear row into IndexedDB
 *
 * @param hash Hash to insert
 */
export const insertOwnedGearAsync = (hash: string) =>
  new Promise<void>(async (resolve, reject) => {
    // Initialize a request for a write operation
    const request = db
      .transaction(DB_STORE_OWNED_GEAR, 'readwrite')
      .objectStore(DB_STORE_OWNED_GEAR)
      .put({ hash, createdAt: new Date() } as OwnedGearRow);

    // Remove the legacy local storage key upon successful import
    request.addEventListener('success', () => resolve());

    // Handle error during the import and keep the legacy local storage key intact
    request.addEventListener('error', event => {
      console.log('Error inserting owned gear item', event);
      reject(event);
    });
  });

/**
 * Delete an owned gear row from IndexedDB
 *
 * @param hash Hash to insert
 */
export const deleteOwnedGearAsync = (hash: string) =>
  new Promise<void>(async (resolve, reject) => {
    // Initialize a request for a write operation
    const request = db
      .transaction(DB_STORE_OWNED_GEAR, 'readwrite')
      .objectStore(DB_STORE_OWNED_GEAR)
      .delete(hash);

    // Remove the legacy local storage key upon successful import
    request.addEventListener('success', () => resolve());

    // Handle error during the import and keep the legacy local storage key intact
    request.addEventListener('error', event => {
      console.log('Error deleting owned gear item', event);
      reject(event);
    });
  });
