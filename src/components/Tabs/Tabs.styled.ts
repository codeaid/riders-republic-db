import styled from 'styled-components';
import tileSrc from 'assets/bg-tile.png';

export const StyledTabs = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  user-select: none;

  &::after {
    background-image: url(${tileSrc});
    background-size: 150px;
    bottom: 0;
    content: '';
    height: 0.2em;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
