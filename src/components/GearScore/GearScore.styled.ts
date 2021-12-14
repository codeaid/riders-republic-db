import styled from 'styled-components';
import iconSrc from './GearScore.icon.png';

export const GearScoreCode = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 1;
  font-size: 0.8rem;
  font-weight: bold;
  justify-content: center;
  text-transform: uppercase;
`;

export const GearScoreIcon = styled.div`
  background-color: ${({ theme }) => theme.gear.score.icon.background};
  background-image: url(${iconSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.5rem;
  display: inline-block;
  width: 1.2rem;
`;

export const GearScoreNumber = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.gear.score.number.background};
  display: flex;
  font-family: 'Heading Pro Extra Bold', sans-serif;
  justify-content: center;
  margin: 4px 4px 4px 0;
  width: 2.2em;
`;

export const StyledGearScore = styled.div`
  background-color: ${({ theme }) => theme.gear.elite};
  display: flex;
  height: 1.5rem;
  line-height: 1em;
  user-select: none;
  width: 5rem;
`;
