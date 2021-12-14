import { StrictMode } from 'react';
import { render } from 'react-dom';
import {
  App,
  GearCategoryProvider,
  GearItemProvider,
  GearSpecProvider,
} from 'components';
import { categories, gear, specs } from 'config';

render(
  <StrictMode>
    <GearCategoryProvider value={categories}>
      <GearSpecProvider value={specs}>
        <GearItemProvider value={gear}>
          <App />
        </GearItemProvider>
      </GearSpecProvider>
    </GearCategoryProvider>
  </StrictMode>,
  document.getElementById('root'),
);
