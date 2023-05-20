import { PaginationSkeleton } from 'presentation/atomic-component/molecule/skeleton/pagination-skeleton';
import { Skeleton } from '@mui/material';
import type { FC } from 'react';

import { SkeletonTableRow } from './skeleton-table-row';

interface TableSkeletonProps {
  quantity: number;
  line: number;
}

export const TableSkeleton: FC<TableSkeletonProps> = ({ quantity, line }) => (
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1.3rem',
        overflow: 'hidden',

        padding: '16px',
        paddingBottom: '2.1rem',
        width: '100%'
      }}
    >
      {Array.from(Array(quantity), (event, id) => (
        <Skeleton
          key={id}
          animation={'wave'}
          height={30}
          sx={{ flex: 1, margin: '0px 20px', maxWidth: 'auto' }}
        />
      ))}
    </div>

    {Array.from(Array(line), (event, id) => (
      <SkeletonTableRow key={id} quantity={quantity} />
    ))}

    <PaginationSkeleton />
  </>
);
