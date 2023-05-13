import { useDebounce } from 'data/hooks/use-debounce';
import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface useProcessSearchProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
}

export interface useProcessSearchResponse {
  page: number;
  limit: number;
}

const firstPage = 1;
const delay = 500;

export const useProcessSearch = (
  props: useProcessSearchProps
): { data: useProcessSearchResponse } => {
  const [call, setCall] = useState(true);
  const [data, setData] = useState<useProcessSearchResponse>({
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
    [props.limit],
    delay
  );

  return { data };
};
