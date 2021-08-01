import React from 'react';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  textAlign,
  LayoutProps,
  PositionProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  ShadowProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system';

export interface BoxProps
  extends LayoutProps,
    PositionProps,
    BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    ShadowProps,
    SpaceProps,
    TextAlignProps {
  children: React.ReactNode;
}

export const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${textAlign}
`;

Box.displayName = 'Box';

export default Box;
