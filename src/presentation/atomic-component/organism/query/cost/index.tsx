import { CostCard, QueryManager } from 'presentation/atomic-component/atom';
import { useFindCostQuery } from 'infra/cache';
import type { FC } from 'react';

interface CostQueryProps {
  vehicleId: string;
}

export const CostQuery: FC<CostQueryProps> = ({ vehicleId }) => {
  const costQuery = useFindCostQuery({
    page: 1,
    params: {
      vehicleId
    }
  });

  return (
    <div>
      <QueryManager query={costQuery}>
        <div className={'flex flex-wrap gap-2'}>
          {costQuery.data?.payload.map((cost) => (
            <CostCard key={cost.id} {...cost} />
          ))}
        </div>
      </QueryManager>
    </div>
  );
};
