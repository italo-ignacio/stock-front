/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Checkbox,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Clear, Search } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

interface CollapseFilterProps {
  filter: any;
  setFilter: any;
  filterList: { label: number | string; value: number | string }[] | string[];
  filterName: string;
  selectedFilters: string[] | null;
  variant: 'dark' | 'light';
}

const defaultValues = {
  firstIndex: 0,
  notInArray: -1,
  removeOfArray: 1
};

export const GenericListFilter: FC<CollapseFilterProps> = ({
  setFilter,
  filterList,
  selectedFilters,
  filterName,
  filter,
  variant
}) => {
  const [search, setSearch] = useState('');
  const [filteredFilter, setFilteredFilter] = useState(filterList);

  const dispatch = useDispatch();

  const newState = (value: string[] | null): unknown => {
    const filters = { ...filter };
    const obj = {
      [filterName]: value
    };

    Object.assign(filters, obj);

    return filters;
  };

  const isObject = (): boolean => {
    const verifyType = filterList as { label?: string }[];

    if (verifyType[defaultValues.firstIndex]?.label) return true;
    return false;
  };

  const handleAddFilter = (name: string): void => {
    const select = selectedFilters || [];
    const currentIndex = select.indexOf(name);
    let selectedList: string[] | null = [];

    if (currentIndex === defaultValues.notInArray) selectedList = [...select, name];
    else selectedList = [...select].filter((value, index) => index !== currentIndex);

    if (selectedList.length <= defaultValues.firstIndex) selectedList = null;
    dispatch(setFilter(newState(selectedList)));
  };

  const handleCleanFilter = (): void => {
    dispatch(setFilter(newState(null)));
  };

  useEffect(() => {
    let newFilteredFilter = [];

    if (isObject()) {
      const filterToList = filterList as { label: string; value: string }[];

      newFilteredFilter = filterToList.filter((name) =>
        name.label.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    } else {
      const filterToList = filterList as string[];

      newFilteredFilter = filterToList.filter((name: string) =>
        name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    setFilteredFilter(newFilteredFilter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterList, search]);

  return (
    <>
      <div className={'flex flex-col items-end py-2 gap-1 w-full'}>
        <Input
          color={variant === 'light' ? 'primary' : 'secondary'}
          endAdornment={
            <InputAdornment position={'end'}>
              <IconButton onClick={(): void => setSearch('')} tabIndex={-1}>
                <Clear />
              </IconButton>
            </InputAdornment>
          }
          onChange={(event): void => setSearch(event.target.value)}
          placeholder={'Pesquisar'}
          startAdornment={
            <InputAdornment position={'start'}>
              <Search />
            </InputAdornment>
          }
          value={search}
        />

        <span
          className={`flex mt-auto text-sm text-gray hover:underline-offset-2 hover:underline cursor-pointer ${
            variant === 'light' ? 'text-gray' : 'text-white'
          }`}
          onClick={handleCleanFilter}
        >
          <span>Limpar filtros</span>
        </span>
      </div>

      <div
        className={`max-h-[250px] overflow-auto scrollbar:w-[6px] ${
          variant === 'light' ? null : 'filter'
        }`}
      >
        <FormGroup>
          {filteredFilter.length > defaultValues.firstIndex ? (
            filteredFilter.map((item: any) => {
              const labelId = `checkbox-list-label-${
                isObject() ? item.label.replace(/ /gu, '-') : item.replace(/ /gu, '-')
              }`;

              return (
                <ListItem key={isObject() ? item.label : item} disableGutters disablePadding>
                  <ListItemButton
                    onClick={(): void => handleAddFilter(isObject() ? item.value : item)}
                    sx={{
                      color: `${variant === 'light' ? null : 'white'}`,
                      gap: '0',
                      padding: '0'
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                      <Checkbox
                        checked={
                          selectedFilters
                            ? selectedFilters.indexOf(isObject() ? item.value : item) !==
                              defaultValues.notInArray
                            : false
                        }
                        color={variant === 'light' ? 'primary' : 'secondary'}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                        tabIndex={-1}
                      />
                    </ListItemIcon>

                    <ListItemText id={labelId} primary={isObject() ? item.label : item} />
                  </ListItemButton>
                </ListItem>
              );
            })
          ) : (
            <ListItemButton sx={{ color: `${variant === 'light' ? null : 'white'}` }}>
              Nenhum item encontrado
            </ListItemButton>
          )}
        </FormGroup>
      </div>
    </>
  );
};
