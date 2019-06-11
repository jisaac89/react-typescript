import React, { FunctionComponent } from 'react';

// Components witha body no more than 7 lines

interface IVisibleProps {
  isVisible: boolean;
  elseRender?: JSX.Element;
}

const TabBarIcon: FunctionComponent<{ name: string; focused: boolean }> = ({ name, focused }) => {
  // return <Ionicons name={name} size={26} style={{ marginBottom: -3 }} color={focused ? 'red' : 'blue'} />;
  return <div>{name}</div>;
};

const Visible: FunctionComponent<IVisibleProps> = ({ isVisible, children, elseRender }) => {
  if (isVisible) {
    return <>{children}</>;
  }
  return elseRender ? elseRender : null;
};

export { Visible, TabBarIcon };
