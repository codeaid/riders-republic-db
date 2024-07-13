import { brandNames } from '@/config/brands';
import type { Brand } from '@/types/brands';

/**
 * Get brand name by its type
 *
 * @param brand Source brand type
 */
export const getBrandName = (brand: Brand) => {
  const name = brandNames.get(brand);
  if (!name) {
    throw new Error(`Brand name for "${brand}" not mapped`);
  }

  return name;
};
