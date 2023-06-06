import { FleetCard, QueryManager } from 'presentation/atomic-component/atom';
import { useFindFleetQuery } from 'infra/cache';
import type { FC } from 'react';

export const FleetQuery: FC = () => {
  const fleetQuery = useFindFleetQuery({
    page: 1
  });

  return (
    <QueryManager query={fleetQuery}>
      <div className={'flex flex-wrap gap-2'}>
        {fleetQuery.data?.payload.map((fleet) => (
          <FleetCard key={fleet.id} {...fleet} />
        ))}
      </div>
    </QueryManager>
  );
};
