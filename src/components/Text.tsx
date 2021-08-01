import styled from 'styled-components';
import { typography, space, color, TypographyProps, SpaceProps, ColorProps } from 'styled-system';

interface TextProps extends TypographyProps, SpaceProps, ColorProps {
  children: React.ReactNode;
}

export const Text = styled.div<TextProps>`
  ${typography}
  ${space}
  ${color}
`;

export default Text;
