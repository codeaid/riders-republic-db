import styled from 'styled-components';
import imageSrc from './Logo.image.png';

export const StyledLogo = styled.div`
  background-image: url(${imageSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 120% 120%;
  height: 1rem;
  overflow: hidden;
  width: 1rem;
`;
