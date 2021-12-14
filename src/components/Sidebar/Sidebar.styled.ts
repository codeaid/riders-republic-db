import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: ${({ theme }) => theme.sidebar.background};
  box-shadow: 0 0 2.2px rgba(0, 0, 0, 0.053), 0 0 5.3px rgba(0, 0, 0, 0.077),
    0 0 10px rgba(0, 0, 0, 0.095), 0 0 17.9px rgba(0, 0, 0, 0.113),
    0 0 33.4px rgba(0, 0, 0, 0.137), 0 0 80px rgba(0, 0, 0, 0.19);
  grid-area: sidebar;
  padding: 0.5rem;
  width: 12rem;
  z-index: 9;

  @media (max-width: 700px) {
    padding: 0.25rem;
    width: unset;
  }
`;
