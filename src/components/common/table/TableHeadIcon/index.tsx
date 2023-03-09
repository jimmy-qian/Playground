import * as React from 'react';

import { TableHeadIconContainer } from './styled';

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12.5 14.5l.96 1.152a1.5 1.5 0 01-1.92 0l.96-1.152zm5.04-6.152a1.5 1.5 0 011.92 2.304l-1.92-2.304zm-12 2.304a1.5 1.5 0 111.92-2.304l-1.92 2.304zm6 2.696l6-5 1.92 2.304-6 5-1.92-2.304zm0 2.304l-6-5 1.92-2.304 6 5-1.92 2.304z" />
  </svg>
);

export const TableHeadIcon: React.FC<TableHeadIconProps> = ({ pointUp }) => (
  <TableHeadIconContainer pointUp={pointUp}>
    <ArrowDownIcon />
  </TableHeadIconContainer>
);

type TableHeadIconProps = {
  pointUp?: boolean;
};