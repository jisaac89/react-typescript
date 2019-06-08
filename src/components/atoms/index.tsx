import React, { FunctionComponent } from 'react';

interface IVisibleProps {
  isVisible: boolean;
  elseRender?: JSX.Element;
}

const Visible: FunctionComponent<IVisibleProps> = ({ isVisible, children, elseRender }) => {
  if (isVisible) {
    return <>{children}</>;
  }
  return elseRender ? elseRender : null;
};

export { Visible };
