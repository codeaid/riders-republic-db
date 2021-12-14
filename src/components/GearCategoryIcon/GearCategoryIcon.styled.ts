import styled from 'styled-components';
import { getCategoryColor } from 'lib/categories';
import {
  GearCategoryIconAirAsset,
  GearCategoryIconBikeRaceAsset,
  GearCategoryIconBikeTricksAsset,
  GearCategoryIconSnowRaceAsset,
  GearCategoryIconSnowTricksAsset,
} from './assets';
import { StyledGearCategoryIconProps } from './types';

const GearCategoryIcon = styled.div`
  -webkit-user-drag: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

export const GearCategoryIconAir = styled(GearCategoryIcon)`
  background-image: url(${GearCategoryIconAirAsset});
`;

export const GearCategoryIconBikeRace = styled(GearCategoryIcon)`
  background-image: url(${GearCategoryIconBikeRaceAsset});
`;

export const GearCategoryIconBikeTricks = styled(GearCategoryIcon)`
  background-image: url(${GearCategoryIconBikeTricksAsset});
`;

export const GearCategoryIconSnowRace = styled(GearCategoryIcon)`
  background-image: url(${GearCategoryIconSnowRaceAsset});
`;

export const GearCategoryIconSnowTricks = styled(GearCategoryIcon)`
  background-image: url(${GearCategoryIconSnowTricksAsset});
`;

export const StyledGearCategoryIcon = styled.div<StyledGearCategoryIconProps>`
  align-items: center;
  background-color: ${({ $category, theme }) =>
    getCategoryColor(theme, $category)};
  display: inline-flex;
  height: 50px;
  justify-content: center;
  padding: 0.2rem;
  width: 50px;

  @media (max-width: 700px) {
    height: 40px;
    width: 40px;
  }
`;
