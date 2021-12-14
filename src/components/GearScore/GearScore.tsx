import { VoidFunctionComponent } from 'react';
import {
  GearScoreCode,
  GearScoreIcon,
  GearScoreNumber,
  StyledGearScore,
} from './GearScore.styled';
import { GearScoreProps } from './types';

export const GearScore: VoidFunctionComponent<GearScoreProps> = props => {
  const { code, score } = props;

  return (
    <StyledGearScore>
      <GearScoreIcon />
      <GearScoreCode>{code}</GearScoreCode>
      <GearScoreNumber>{score}</GearScoreNumber>
    </StyledGearScore>
  );
};
