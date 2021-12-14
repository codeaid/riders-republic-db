import styled from 'styled-components';
import backgroundSrc from 'assets/bg-body.jpeg';
import { Ellipsis } from 'components/Ellipsis';
import { Logo } from 'components/Logo';

export const AppToolbarLogo = styled(Logo)`
  height: 2.5rem;
  transition: transform ${({ theme }) => theme.transition.fast} ease-in-out;
  width: 2.5rem;

  &:hover {
    transform: rotate(10deg);
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const AppToolbarTitle = styled(Ellipsis)`
  font-family: 'Heading Pro Book', sans-serif;
  overflow: hidden;
  padding: 0.5rem;
  font-variant: small-caps;
`;

export const AppContent = styled.div`
  overflow: auto;
  padding: 0.5rem;
  position: relative;
`;

export const StyledApp = styled.div`
  background-image: url(${backgroundSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-areas:
    'toolbar toolbar'
    'sidebar content';
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  position: relative;
  width: 100%;
`;
