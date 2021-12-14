import { createContext } from 'react';
import { GearCategory } from 'types/categories';

export const GearCategoryContext = createContext<Array<GearCategory>>([]);
export const { Provider: GearCategoryProvider } = GearCategoryContext;
