import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GearCategoryMenuItemLabel = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 0 1rem;
  text-transform: uppercase;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledGearCategoryMenuItem = styled(NavLink)`
  background-color: ${({ theme }) => theme.navigation.item.background};
  color: ${({ theme }) => theme.navigation.item.color};
  cursor: pointer;
  display: flex;
  font-family: 'Heading Pro Book', sans-serif;
  overflow: hidden;
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.transition.fast}
      ease-in-out,
    color ${({ theme }) => theme.transition.fast} ease-in-out;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.navigation.item.active.background};
    color: ${({ theme }) => theme.navigation.item.active.color};
  }
`;
