import { useDebounce } from 'data/hooks/use-debounce';
import { useEffect, useState } from 'react';
import type { CollaboratorFilterState } from 'store/collaborator/slice';
import type { Dispatch, SetStateAction } from 'react';

interface useCollaboratorSearchProps extends CollaboratorFilterState {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
}

export interface useCollaboratorSearchResponse extends CollaboratorFilterState {
  page: number;
  limit: number;
}

const firstPage = 1;
const delay = 500;

export const useCollaboratorSearch = (
  props: useCollaboratorSearchProps
): { data: useCollaboratorSearchResponse } => {
  const [call, setCall] = useState(true);
  const [data, setData] = useState<useCollaboratorSearchResponse>({
    email: props.email,
    limit: props.limit,
    name: props.name,
    nif: props.nif,
    page: props.page,
    roles: props.roles,
    sort: props.sort,
    sortBy: props.sortBy,
    specialties: props.specialties,
    unity: props.unity
  });

  useEffect(
    () =>
      setData({
        email: props.email,
        limit: props.limit,
        name: props.name,
        nif: props.nif,
        page: props.page,
        roles: props.roles,
        sort: props.sort,
        sortBy: props.sortBy,
        specialties: props.specialties,
        unity: props.unity
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.page, call]
  );

  useDebounce(
    () => (props.page === firstPage ? setCall(!call) : props.setPage(firstPage)),
    [
      props.email,
      props.page,
      props.limit,
      props.name,
      props.unity,
      props.roles,
      props.sort,
      props.nif
    ],

    delay
  );

  return { data };
};
