import { DriverCard, QueryManager } from 'presentation/atomic-component/atom';
import { useFindDriverQuery } from 'infra/cache';
import type { FC } from 'react';

export const DriverQuery: FC = () => {
  const driverQuery = useFindDriverQuery({
    page: 1
  });

  return (
    <div>
      <QueryManager query={driverQuery}>
        <div className={'flex flex-wrap gap-2'}>
          {driverQuery.data?.payload.map((driver) => (
            <DriverCard key={driver.id} id={driver.id} name={driver.name} />
          ))}
        </div>
      </QueryManager>
    </div>
  );
};
