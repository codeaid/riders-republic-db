import styled, { keyframes } from 'styled-components';
import tileSrc from 'assets/bg-tile.png';
import { Ellipsis } from 'components/Ellipsis';
import markerSrc from './GearItem.marker.png';

const kfBorder = keyframes`
  0%,
  100% {
      opacity: 0.3;
  }
  50% {
      opacity: 1;
  }
`;

export const GearItemCardBorder = styled.div`
  background-color: ${({ theme }) => theme.gear.elite};
  height: 0.9rem;
  width: 100%;
`;

export const GearItemCardHeader = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 5rem;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  position: relative;

  &::after {
    background-image: url(${tileSrc});
    background-size: 150px;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  & > * {
    z-index: 2;
  }
`;

export const GearItemCardHeaderBrand = styled(Ellipsis)`
  align-self: flex-end;
  font-size: 0.7em;
  line-height: 1em;
`;

export const GearItemCardHeaderKind = styled.span`
  font-weight: normal;
  margin-left: 0.2em;
  opacity: 0.5;
  quotes: '(' ')';

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`;

export const GearItemCardHeaderLabels = styled.div`
  display: grid;
  grid-gap: 0.2em;
  text-transform: uppercase;
`;

export const GearItemCardHeaderModel = styled(Ellipsis)`
  align-self: flex-start;
  font-size: 0.9em;
  font-weight: bold;
  line-height: 1em;
`;

export const GearItemCardMarker = styled.div`
  background-image: url(${markerSrc});
  height: 54px;
  position: absolute;
  right: 0;
  top: 0;
  width: 54px;
  z-index: 2;
`;

export const GearItemCardStatsWrapper = styled.div`
  padding: 0.75rem 1rem;
`;

export const StyledGearItemCard = styled.div`
  background-color: ${({ theme }) => theme.gear.card.background};
  box-shadow: 0 0.7px 2.7px rgba(0, 0, 0, 0.016),
    0 1.7px 6.9px rgba(0, 0, 0, 0.022), 0 3.5px 14.2px rgba(0, 0, 0, 0.028),
    0 7.3px 29.2px rgba(0, 0, 0, 0.034), 0 20px 80px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  position: relative;
  transition: box-shadow ${({ theme }) => theme.transition.fast} ease-in-out;
  user-select: none;

  &::before {
    border: 11px solid ${({ theme }) => theme.gear.elite};
    bottom: -6px;
    content: '';
    left: -6px;
    opacity: 0;
    position: absolute;
    right: -6px;
    top: -6px;
  }

  &::after {
    border: 0.24rem solid ${({ theme }) => theme.gear.card.border.color};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:hover {
    &::before {
      animation: ${kfBorder} 1s ease-in-out;
      animation-iteration-count: infinite;
    }
  }
`;
