import { useContext } from 'react';
import { GearCategoryContext } from 'components';

export const useGearCategories = () => useContext(GearCategoryContext);
