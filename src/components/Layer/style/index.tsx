import React from 'react';
import {
  border,
  dimensions,
  fill,
  flexCenter,
  flexDirection,
  m,
  overflow,
  scroll,
  scrollX,
  scrollY,
  textAlign
} from '../../../styles/globalStyles';
import { ILayerProps } from '../ILayer';
import { View } from 'react-native';

const styleObject = (props: ILayerProps): {} => {
  return {
    ...(props.flex ? flexDirection(props.flex) : null),
    ...(props.dimensions ? dimensions(props.dimensions[0], props.dimensions[1], props.dimensions[2]) : null),
    ...(props.fill ? fill : null),
    ...(props.overflow ? overflow : null),
    ...(props.scroll ? scroll : null),
    ...(props.scrollX ? scrollX : null),
    ...(props.scrollY ? scrollY : null),
    ...(props.flexCenter ? flexCenter : null),
    ...(props.border ? border(props.border, '1px solid #ccc') : null),
    ...(props.align ? textAlign('center') : null),
    ...(props.alignContainer ? m('0 auto') : null),
    ...(props.classList ? props.classList : {})
  };
};

const LayerStyle = (props: ILayerProps) => {
  return <View style={{ ...styleObject(props) }}>{props.children}</View>;
};

export { LayerStyle };
