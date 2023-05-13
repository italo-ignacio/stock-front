import { useDebounce } from 'data/hooks/use-debounce';
import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface useSpecialtySearchProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
}

export interface useSpecialtySearchResponse {
  page: number;
  limit: number;
}

const firstPage = 1;
const delay = 500;

export const useSpecialtySearch = (
  props: useSpecialtySearchProps
): { data: useSpecialtySearchResponse } => {
  const [call, setCall] = useState(true);
  const [data, setData] = useState<useSpecialtySearchResponse>({
    limit: props.limit,
    page: props.page
  });

  useEffect(
    () =>
      setData({
        limit: props.limit,
        page: props.page
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.page, call]
  );

  useDebounce(
    () => (props.page === firstPage ? setCall(!call) : props.setPage(firstPage)),
    [props.page, call],
    delay
  );

  return { data };
};
