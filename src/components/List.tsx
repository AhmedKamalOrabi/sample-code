import React from 'react';
import styled from 'styled-components';
import { space, layout, SpaceProps, LayoutProps, border, BorderProps } from 'styled-system';

interface ListItemProps extends BorderProps, SpaceProps {
  children: React.ReactNode;
}

export const ListItem = styled.li<ListItemProps>`
  ${border}
  ${space}
`;

ListItem.displayName = 'ListItem';

interface ListProps extends SpaceProps, LayoutProps {
  listStyleType: string;
  children: React.ReactNode;
  padding: string;
}

export const List: React.FC = styled.ul<ListProps>`
  margin: 0;
  width: '100%';
  padding: ${({ padding = '16' }) => padding}px;
  list-style-type: ${({ listStyleType = 'none' }) => listStyleType};
  ${space}
  ${layout}
`;

List.displayName = 'List';

export default List;
