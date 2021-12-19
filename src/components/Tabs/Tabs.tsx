import {
  Children,
  createElement,
  isValidElement,
  useMemo,
  useState,
  VoidFunctionComponent,
} from 'react';
import { StyledTabs } from './Tabs.styled';
import { TabLabel } from './TabLabel';
import { TabLabelProps, TabsProps } from './types';

export const Tabs: VoidFunctionComponent<TabsProps> = props => {
  const { children, defaultActive = 0 } = props;

  // Index of the currently activated tab
  const [activeTab, setActiveTab] = useState(defaultActive);

  const tabs = useMemo(
    () =>
      // Iterate through all children and build tab items for each of them
      Children.map(children, (child, index) => {
        // Ignore invalid React elements
        if (!isValidElement(child)) {
          return null;
        }

        // Create a new TabItem component using child's label as the content
        return createElement<TabLabelProps>(
          TabLabel,
          {
            active: index === activeTab,
            onClick: () => setActiveTab(index),
          },
          child.props.label,
        );
      }).filter(child => !!child),
    [activeTab, children],
  );

  // Retrieve content of the currently selected tab
  const content = useMemo(
    () =>
      Children.map(children, (child, index) =>
        index === activeTab ? child.props.children : null,
      ).filter(content => content !== null),
    [activeTab, children],
  );

  return (
    <>
      <StyledTabs>{tabs}</StyledTabs>
      {content}
    </>
  );
};
