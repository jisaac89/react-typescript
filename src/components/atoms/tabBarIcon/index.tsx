import React, { FunctionComponent } from 'react';
// import { Ionicons } from '@expo/vector-icons';

const TabBarIcon: FunctionComponent<{ name: string; focused: boolean }> = ({ name, focused }) => {
  // return <Ionicons name={name} size={26} style={{ marginBottom: -3 }} color={focused ? 'red' : 'blue'} />;
  return <div>{name}</div>;
};

export { TabBarIcon };
