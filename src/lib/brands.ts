import { brandNames } from 'config/brands';
import { Brand } from 'types/brands';

/**
 * Get name of the specified brand type
 *
 * @param {Brand} brand Target brand to look up
 */
export const getBrandName = (brand: Brand) =>
  brandNames.get(brand) ?? '[unknown]';
