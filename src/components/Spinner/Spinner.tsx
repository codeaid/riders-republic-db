import { VoidFunctionComponent } from 'react';
import { SpinnerImage, StyledSpinner } from './Spinner.styled';

export const Spinner: VoidFunctionComponent = () => (
  <StyledSpinner>
    <SpinnerImage />
  </StyledSpinner>
);
