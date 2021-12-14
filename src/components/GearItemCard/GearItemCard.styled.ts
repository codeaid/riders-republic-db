import styled from 'styled-components';
import tileSrc from 'assets/bg-tile.png';
import { Ellipsis } from 'components/Ellipsis';

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

export const GearItemCardStatsWrapper = styled.div`
  padding: 0.75rem 1rem;
`;

export const StyledGearItemCard = styled.div`
  background-color: ${({ theme }) => theme.gear.card.background};
  box-shadow: 0 0.7px 2.7px rgba(0, 0, 0, 0.016),
    0 1.7px 6.9px rgba(0, 0, 0, 0.022), 0 3.5px 14.2px rgba(0, 0, 0, 0.028),
    0 7.3px 29.2px rgba(0, 0, 0, 0.034), 0 20px 80px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: box-shadow ${({ theme }) => theme.transition.fast} ease-in-out;
  user-select: none;

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
    box-shadow: 0 0.7px 2.7px rgba(0, 0, 0, 0.047),
      0 1.7px 6.9px rgba(0, 0, 0, 0.067), 0 3.5px 14.2px rgba(0, 0, 0, 0.083),
      0 7.3px 29.2px rgba(0, 0, 0, 0.103), 0 20px 80px rgba(0, 0, 0, 0.15);
  }
`;
