import { VoidFunctionComponent } from 'react';
import { Tab, Tabs } from 'components';
import { GearSpecTab } from './GearSpecTab';
import { GearSpecTabsDescription } from './GearSpecTabs.styled';
import { GearSpecTabsProps } from './types';

export const GearSpecTabs: VoidFunctionComponent<GearSpecTabsProps> = props => {
  const { specs } = props;

  return (
    <Tabs>
      {specs.map(spec => (
        <Tab key={spec.type} label={spec.name}>
          <GearSpecTabsDescription>{spec.description}</GearSpecTabsDescription>
          <GearSpecTab spec={spec} />
        </Tab>
      ))}
    </Tabs>
  );
};
