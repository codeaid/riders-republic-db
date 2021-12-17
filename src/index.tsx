import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  App,
  GearCategoryProvider,
  GearItemProvider,
  GearSpecProvider,
} from 'components';
import { categories, gear, specs } from 'config';
import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

render(
  <StrictMode>
    <GearCategoryProvider value={categories}>
      <GearSpecProvider value={specs}>
        <GearItemProvider value={gear}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </GearItemProvider>
      </GearSpecProvider>
    </GearCategoryProvider>
  </StrictMode>,
  document.getElementById('root'),
);
