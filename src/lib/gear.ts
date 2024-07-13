import { getBrandName } from '$lib/brands';
import type { GearEntity } from '@/types/gear';
import type { SpecializationEntity } from '@/types/specializations';

/**
 * Sort gear entities by brand name
 *
 * @param a Left operand
 * @param b Right operand
 */
const sortGearByBrand = (a: GearEntity<any>, b: GearEntity<any>) =>
  getBrandName(a.brand)?.localeCompare(getBrandName(b.brand));

/**
 * Sort gear entities by model
 *
 * @param a Left operand
 * @param b Right operand
 */
const sortGearByModel = (a: GearEntity<any>, b: GearEntity<any>) => a.model.localeCompare(b.model);

/**
 * Sort gear entities by gear score in descending order
 *
 * @param a Left operand
 * @param b Right operand
 */
const sortGearByScore = (a: GearEntity<any>, b: GearEntity<any>) => b.score - a.score;

/**
 * Sort gear entities based on application logic
 */
export const getSortedGear = (gear: GearEntity<any>[]) =>
  gear.sort((a, b) => {
    const scoreComparison = sortGearByScore(a, b);
    if (scoreComparison !== 0) {
      return scoreComparison;
    }

    const brandComparison = sortGearByBrand(a, b);
    if (brandComparison !== 0) {
      return brandComparison;
    }

    return sortGearByModel(a, b);
  });

/**
 * Create a map of specialization ids and the number of owned gear items in each of them
 *
 * @param store Current store value
 * @param specializations List of specializations to process
 */
export const getSpecializationGearCounts = (
  store: Set<string>,
  specializations: SpecializationEntity<any, any>[],
) =>
  specializations.reduce<Record<string, [number, number]>>(
    (acc, spec) => {
      const count = spec.gear.filter(gear => store.has(gear.hash)).length;
      return { ...acc, [spec.id]: [count, spec.gear.length] };
    },
    {} as Record<string, [number, number]>,
  );
