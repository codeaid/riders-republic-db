import styled from 'styled-components';

export const StyledGearItemGrid = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
