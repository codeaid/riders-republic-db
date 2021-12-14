import styled, { keyframes } from 'styled-components';
import { Logo } from 'components';

const kf = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  50% {
    transform: rotate(-180deg);
  }
  
  100% {
    transform: rotate(-360deg);
  }
`;

export const SpinnerImage = styled(Logo)`
  animation: ${kf} 2s infinite;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  height: 100px;
  width: 100px;
`;

export const StyledSpinner = styled.div`
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: center;
  user-select: none;
  width: 100px;
`;
