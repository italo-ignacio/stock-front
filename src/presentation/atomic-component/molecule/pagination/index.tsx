import { Pagination as PaginationUI } from '@mui/material';
import type { FC } from 'react';

interface PaginationProps {
  page: number;
  totalPages?: number;
  handleChangePage: (event: unknown, newPage: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  page,
  totalPages,
  handleChangePage
}: PaginationProps) => (
  <div className={'flex justify-center'}>
    <PaginationUI
      boundaryCount={2}
      color={'primary'}
      count={totalPages}
      onChange={handleChangePage}
      page={page}
      siblingCount={0}
      size={'small'}
    />
  </div>
);

Pagination.defaultProps = {
  totalPages: 1
};
