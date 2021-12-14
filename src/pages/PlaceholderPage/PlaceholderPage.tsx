import { VoidFunctionComponent } from 'react';
import {
  PlaceholderPageNotification,
  StyledPlaceholderPage,
} from './PlaceholderPage.styled';

export const PlaceholderPage: VoidFunctionComponent = () => (
  <StyledPlaceholderPage>
    <PlaceholderPageNotification>
      Please select a category on the left
    </PlaceholderPageNotification>
  </StyledPlaceholderPage>
);
