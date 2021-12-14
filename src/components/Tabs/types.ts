import { FunctionComponentElement, ReactNode } from 'react';

type TabClickHandler = () => void;

export interface StyledTabItemProps {
  $active: boolean;
}

export interface TabItemProps {
  active: boolean;
  onClick: TabClickHandler;
}

export interface TabProps {
  children?: ReactNode;
  label: string;
}

export interface TabsProps {
  children:
    | FunctionComponentElement<TabProps>
    | Array<FunctionComponentElement<TabProps>>;
  defaultActive?: number;
}
