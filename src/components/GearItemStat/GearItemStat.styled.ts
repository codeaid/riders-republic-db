import styled from 'styled-components';
import tileSrc from 'assets/bg-tile.png';
import {
  GearItemStatAbsorptionAsset,
  GearItemStatAirRotationAsset,
  GearItemStatDeepSnowAsset,
  GearItemStatEngineBoostAsset,
  GearItemStatGripAsset,
  GearItemStatMobilityAsset,
  GearItemStatMobilityHorizontalAsset,
  GearItemStatMobilityVerticalAsset,
  GearItemStatSlowModeAsset,
  GearItemStatSpeedAsset,
  GearItemStatSprintAsset,
} from './assets';

export const GearItemStatBar = styled.div`
  align-self: flex-end;
  background-image: url(${tileSrc});
  background-size: 150px;
  display: flex;
  grid-area: bar;
  height: 9px;
  overflow: hidden;
  width: 100%;
`;

export const GearItemStatBarProgress = styled.div`
  background-color: ${({ theme }) => theme.stats.progress.base};
  height: 100%;
  transition: width ${({ theme }) => theme.transition.fast} ease-out;
  width: 0;
`;

export const GearItemStatBarPositive = styled(GearItemStatBarProgress)`
  background-color: ${({ theme }) => theme.stats.progress.bonus};
`;

const GearItemStatIcon = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  grid-area: icon;
  height: 35px;
  width: 35px;
`;

export const GearItemStatIconAbsorption = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatAbsorptionAsset});
`;

export const GearItemStatIconAirRotation = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatAirRotationAsset});
`;

export const GearItemStatIconDeepSnow = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatDeepSnowAsset});
`;

export const GearItemStatIconEngineBoost = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatEngineBoostAsset});
`;

export const GearItemStatIconGrip = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatGripAsset});
`;

export const GearItemStatIconMobility = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatMobilityAsset});
`;

export const GearItemStatIconMobilityHorizontal = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatMobilityHorizontalAsset});
`;

export const GearItemStatIconMobilityVertical = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatMobilityVerticalAsset});
`;

export const GearItemStatIconSlowMode = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatSlowModeAsset});
`;

export const GearItemStatIconSpeed = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatSpeedAsset});
`;

export const GearItemStatIconSprint = styled(GearItemStatIcon)`
  background-image: url(${GearItemStatSprintAsset});
`;

export const GearItemStatLabel = styled.div`
  align-self: flex-start;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1em;
  text-transform: uppercase;
`;

export const GearItemStatValue = styled.div`
  align-self: flex-start;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1em;
`;

export const GearItemStatValueBest = styled(GearItemStatValue)`
  color: ${({ theme }) => theme.stats.value.best};
`;

export const GearItemStatValueWorst = styled(GearItemStatValue)`
  color: ${({ theme }) => theme.stats.value.worst};
`;

export const StyledGearItemStat = styled.div`
  align-items: center;
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-areas:
    'icon label value'
    'icon bar bar';
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto;
`;
