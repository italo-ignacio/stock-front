/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft } from '@mui/icons-material';
import { Collapse, ListItemButton } from '@mui/material';
import { GenericListFilter } from 'presentation/atomic-component/atom';
import { useState } from 'react';
import type { FC } from 'react';

interface CollapseFilterProps {
  setFilter: any;
  filter: any;
  title: string;
  filtersList: { label: string; value: string }[] | string[];
  filterName: string;
  selectedFilters: string[] | null;
}

export const CollapseFilter: FC<CollapseFilterProps> = ({
  title,
  setFilter,
  filtersList,
  filterName,
  selectedFilters,
  filter
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={'text-base items-center font-medium text-gray'}>
        <ListItemButton
          onClick={(): void => setShow(!show)}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>{title}</div>

          <div className={'flex justify-center items-center '}>
            {selectedFilters ? (
              <div
                className={
                  'bg-primary w-5 h-5 rounded-full text-white flex justify-center items-center text-[.9rem]'
                }
              >
                {selectedFilters.length}
              </div>
            ) : null}

            <ChevronLeft
              className={`rotate delay-150 duration-300 ease-in-out ${show ? '-rotate-90' : ''}`}
            />
          </div>
        </ListItemButton>
      </div>

      <Collapse in={show}>
        <GenericListFilter
          filter={filter}
          filterList={filtersList}
          filterName={filterName}
          selectedFilters={selectedFilters}
          setFilter={setFilter}
          variant={'light'}
        />
      </Collapse>
    </>
  );
};
