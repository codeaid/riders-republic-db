// Narrow a type down to only those subtypes that extend U
export type FilterExtends<T, U> = T extends U ? T : never;

// Extract a union of all identifiers from the specified type T
export type GetEntityIds<T extends { id: string }> = T extends { id: infer U } ? U : never;
