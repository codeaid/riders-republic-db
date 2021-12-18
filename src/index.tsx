import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
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
            {process.env.PUBLIC_URL ? (
              <HashRouter>
                <App />
              </HashRouter>
            ) : (
              <BrowserRouter>
                <App />
              </BrowserRouter>
            )}
          </ThemeProvider>
        </GearItemProvider>
      </GearSpecProvider>
    </GearCategoryProvider>
  </StrictMode>,
  document.getElementById('root'),
);
