import { useMemo } from 'react';
import { getBrandName } from 'lib/brands';
import { Brand } from 'types/brands';

/**
 * Get name of a brand
 *
 * @param {Brand} brand Target brand to look up
 */
export const useBrandName = (brand: Brand) =>
  useMemo(() => getBrandName(brand), [brand]);
