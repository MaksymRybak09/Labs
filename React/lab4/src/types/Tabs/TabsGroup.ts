import React from 'react';

export type TabContentProps = {
  children: React.ReactNode,
}

export type TabKeys = Record<"tab1" | "tab2" | "tab3", number>;

export type TabValues = ['/tab1', '/tab2', '/tab3'];;