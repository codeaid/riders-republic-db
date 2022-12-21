import { DefaultTheme } from 'styled-components';
import { CategoryType } from 'types/categories';

/**
 * Get application theme color associated with the specified category
 *
 * @param {DefaultTheme} theme Application theme
 * @param {CategoryType} category Target category
 */
export const getCategoryColor = (
  theme: DefaultTheme,
  category: CategoryType,
) => {
  switch (category) {
    case CategoryType.Air:
      return theme.category.air;
    case CategoryType.BikeRace:
      return theme.category.bike.race;
    case CategoryType.BikeTricks:
      return theme.category.bike.tricks;
    case CategoryType.Bmx:
      return theme.category.bmx;
    case CategoryType.SnowRace:
      return theme.category.snow.race;
    case CategoryType.SnowTricks:
      return theme.category.snow.tricks;
  }
};
