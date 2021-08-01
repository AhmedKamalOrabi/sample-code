import Box from './Box';
import styled from 'styled-components';
import css from '@styled-system/css';
import React from 'react';

const arrow = {
  'box-shadow': '-1.41px 1.41px 1px 0 rgba(0,0,0,0.01), -3.66px 3.66px 8px 0 rgba(0,0,0,0.04)',
  right: '4px',
  'margin-right': '-8px',
  'transform-origin': '0 0',
  transform: 'rotate(-225deg)',
  top: '0',
};

const tooltipPosition = { top: '100%' };

const tooltipAlign = { right: 0 };

interface TooltipProps {
  children: React.ReactNode;
}

const Tooltip = styled(Box)<TooltipProps>`
  ${css({
    marginTop: 'xs',
    display: 'inline',
    position: 'absolute',
    boxShadow: 'lg',
    backgroundColor: 'white',
    ...tooltipPosition,
    ...tooltipAlign,
    '::after': {
      content: "''",
      position: 'absolute',
      width: 0,
      height: 0,
      borderWidth: '4px',
      borderStyle: 'solid',
      borderColor: 'transparent transparent white white',
      ...arrow,
    },
  })}
`;

interface TooltipContainerProps {
  children: React.ReactNode;
  ref: any;
}

export const TooltipContainer = styled.div<TooltipContainerProps>`
  position: relative;
  z-index: 100;
`;

export default Tooltip;
