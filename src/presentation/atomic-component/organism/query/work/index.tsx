import { QueryManager, WorkCard } from 'presentation/atomic-component/atom';
import { useFindWorkQuery } from 'infra/cache';
import type { FC } from 'react';

interface WorkQueryProps {
  vehicleId: string;
}

export const WorkQuery: FC<WorkQueryProps> = ({ vehicleId }) => {
  const workQuery = useFindWorkQuery({
    page: 1,
    params: {
      vehicleId
    }
  });

  return (
    <QueryManager query={workQuery}>
      <div className={'flex flex-wrap gap-2'}>
        {workQuery.data?.payload.map((work) => (
          <WorkCard key={work.id} {...work} />
        ))}
      </div>
    </QueryManager>
  );
};
