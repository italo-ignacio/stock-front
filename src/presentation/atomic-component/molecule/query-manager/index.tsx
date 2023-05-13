/* eslint-disable react/jsx-no-useless-fragment */
import { Button, Fade } from '@mui/material';
import type { FC, ReactNode } from 'react';

import type { QueryObserverResult, UseQueryResult } from 'react-query';

interface QueryManagerProps {
  query: UseQueryResult;
  children: ReactNode;
  skeleton?: ReactNode;
  hideError?: boolean;
}

export const QueryManager: FC<QueryManagerProps> = ({ query, children, hideError, skeleton }) => {
  if (query.isLoading || (query.isFetching && !query.isFetched)) return <> {skeleton}</>;

  if (query.isError && !hideError)
    return (
      <Fade in>
        <div className={'h-full w-full '}>
          <h1>Parece que houve um erro ao carregar os dados.</h1>

          <Button
            onClick={(): Promise<QueryObserverResult> => query.refetch()}
            variant={'outlined'}
          >
            Tentar novamente
          </Button>

          <div />
        </div>
      </Fade>
    );

  return <> {children}</>;
};
