import { createContext } from 'react';
import { GearItem } from 'types/gear';

export const GearItemContext = createContext<Array<GearItem>>([]);
export const { Provider: GearItemProvider } = GearItemContext;
