import styled from 'styled-components';

export const PlaceholderPageNotification = styled.div`
  background-color: ${({ theme }) => theme.body.background};
  box-shadow: 0 0.7px 2.7px rgba(0, 0, 0, 0.016),
    0 1.7px 6.9px rgba(0, 0, 0, 0.022), 0 3.5px 14.2px rgba(0, 0, 0, 0.028),
    0 7.3px 29.2px rgba(0, 0, 0, 0.034), 0 20px 80px rgba(0, 0, 0, 0.05);
  font-size: 1.2rem;
  max-width: 40rem;
  padding: 2rem 1rem;
  text-align: center;
  user-select: none;
  width: 100%;
`;

export const StyledPlaceholderPage = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;
