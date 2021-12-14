import { FunctionComponent } from 'react';
import { TabProps } from './types';

export const Tab: FunctionComponent<TabProps> = props => {
  const { children } = props;

  return <>{children}</>;
};
