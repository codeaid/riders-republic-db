import styled from 'styled-components';
import { StyledTabLabelProps } from './types';

export const StyledTabLabel = styled.li<StyledTabLabelProps>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.navigation.item.active.background : 'transparent'};
  cursor: pointer;
  font-family: 'Heading Pro Book', sans-serif;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  transition: background-color ${({ theme }) => theme.transition.fast};
  white-space: nowrap;
  z-index: 1;
`;
