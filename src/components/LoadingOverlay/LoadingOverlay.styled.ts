import backgroundSrc from 'assets/bg-body.jpeg';
import styled from 'styled-components';

export const StyledLoadingOverlay = styled.div`
  align-items: center;
  background-image: url(${backgroundSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;
