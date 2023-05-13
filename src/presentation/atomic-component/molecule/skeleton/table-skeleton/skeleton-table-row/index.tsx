import { Skeleton, TableCell, TableRow } from '@mui/material';
import type { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const SkeletonTableRow: FC<{ quantity?: number }> = ({ quantity = 1 }) => (
  <TableRow key={quantity}>
    {Array.from(Array(quantity), (event, id) => (
      <TableCell key={id}>
        <Skeleton animation={'wave'} height={30} sx={{ flex: 1, maxWidth: 'auto' }} />
      </TableCell>
    ))}
  </TableRow>
);

SkeletonTableRow.defaultProps = {
  quantity: 5
};
