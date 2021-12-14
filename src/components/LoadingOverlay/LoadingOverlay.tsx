import { VoidFunctionComponent } from 'react';
import { Spinner } from 'components';
import { StyledLoadingOverlay } from './LoadingOverlay.styled';

export const LoadingOverlay: VoidFunctionComponent = () => (
  <StyledLoadingOverlay>
    <Spinner />
  </StyledLoadingOverlay>
);
