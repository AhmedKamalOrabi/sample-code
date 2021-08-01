import React from 'react';
import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

const IconContainer = styled.svg<ColorProps>`
  ${color};
  fill: currentcolor;
`;
IconContainer.displayName = 'IconContainer';

interface IconComponentProps {
  size: number | string;
  color: string;
  content: React.ReactNode;
  viewBox: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ content, viewBox, size = 24, ...props }) => (
  <IconContainer width={size} height={size} viewBox={viewBox} {...props}>
    {content}
  </IconContainer>
);

export default IconComponent;
