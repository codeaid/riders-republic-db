import { useContext } from 'react';
import { GearSpecContext } from 'components';

/**
 * Retrieve all available gear specializations
 */
export const useGearSpecs = () => useContext(GearSpecContext);
