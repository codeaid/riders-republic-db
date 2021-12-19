import { FunctionComponentElement, ReactNode } from 'react';

type TabLabelClickHandler = () => void;

export interface StyledTabLabelProps {
  $active: boolean;
}

export interface TabLabelProps {
  active: boolean;
  onClick: TabLabelClickHandler;
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
