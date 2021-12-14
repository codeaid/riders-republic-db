import styled from 'styled-components';

export const StyledToolbar = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.toolbar.background};
  color: ${({ theme }) => theme.toolbar.color};
  display: flex;
  grid-area: toolbar;
  padding: 0 0.25rem;
  user-select: none;
  z-index: 10;
`;
