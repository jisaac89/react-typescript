import * as React from 'react';
import { ILayerProps } from './ILayer';
import { LayerStyle } from './style';

const Layer = (props: ILayerProps) => {
  return !props.hide ? (
    <LayerStyle {...props} onClick={props.onClick} disabled={!props.onClick ? true : false}>
      {props.children}
    </LayerStyle>
  ) : null;
};

export { Layer };
