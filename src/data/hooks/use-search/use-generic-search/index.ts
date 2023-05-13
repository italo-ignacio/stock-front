import { useDebounce } from 'data/hooks/use-debounce';
import { useEffect, useState } from 'react';

export interface useGenericSearchProps {
  search: string | null;
  func: (name: string | null) => void;
}

const delay = 500;

export const useGenericSearch = (props: useGenericSearchProps): void => {
  const [call, setCall] = useState(true);

  useEffect(
    () => props.func(props.search),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [call]
  );

  useDebounce(() => setCall(!call), [props.search], delay);
};
