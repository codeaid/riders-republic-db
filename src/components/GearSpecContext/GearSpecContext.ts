import { createContext } from 'react';
import { GearSpec } from 'types/specs';

export const GearSpecContext = createContext<Array<GearSpec>>([]);
export const { Provider: GearSpecProvider } = GearSpecContext;
