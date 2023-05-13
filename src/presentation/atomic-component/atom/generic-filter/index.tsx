/* eslint-disable @typescript-eslint/no-explicit-any */
import { Clear, Search } from '@mui/icons-material';
import { IconButton, Input, InputAdornment } from '@mui/material';
import { useDebounce } from 'data/hooks';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import type { FC } from 'react';

interface CollapseFilterProps {
  filter: any;
  setFilter: any;
  filterName: string;
  filterValue?: string | null;
  variant?: 'dark' | 'light';
}

export const GenericFilter: FC<CollapseFilterProps> = ({
  setFilter,
  filterName,
  filter,
  variant,
  filterValue
}) => {
  const [search, setSearch] = useState(filterValue || '');
  const dispatch = useDispatch();
  const delay = 500;

  const newState = (value?: string | null): unknown => {
    const filters = { ...filter };
    const obj = {
      [filterName]: value === '' ? null : value
    };

    Object.assign(filters, obj);

    return filters;
  };

  const handleAddFilter = (name?: string | null): void => {
    dispatch(setFilter(newState(name)));
  };

  useDebounce(() => handleAddFilter(search), [search], delay);

  return (
    <div className={'flex flex-col items-end gap-1 w-full'}>
      <Input
        color={variant === 'light' ? 'primary' : 'secondary'}
        endAdornment={
          <InputAdornment position={'end'}>
            <IconButton onClick={(): void => setSearch('')} tabIndex={-1}>
              <Clear />
            </IconButton>
          </InputAdornment>
        }
        onChange={(event): void => {
          setSearch(event.target.value);
        }}
        placeholder={'Pesquisar'}
        startAdornment={
          <InputAdornment position={'start'}>
            <Search />
          </InputAdornment>
        }
        value={search}
      />
    </div>
  );
};

GenericFilter.defaultProps = {
  variant: 'light'
};
