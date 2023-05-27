import { CostModal, WorkModal } from 'presentation/atomic-component/molecule/modal';
import { CostQuery, WorkQuery } from 'presentation/atomic-component/organism';
import { GoBack } from 'presentation/atomic-component/atom';
import { useParams } from 'react-router-dom';
import type { FC } from 'react';

export const VehicleContent: FC = () => {
  const { vehicleId } = useParams() as { fleetId: string; vehicleId: string };

  return (
    <div>
      <GoBack />

      <div className={'flex items-center gap-4 p-4'}>
        <h2>Trabalhos</h2>
        <WorkModal vehicleId={vehicleId} />
      </div>

      <div>
        <WorkQuery vehicleId={vehicleId} />
      </div>

      <div className={'flex items-center gap-4 p-4'}>
        <h2>Custos</h2>
        <CostModal vehicleId={vehicleId} />
      </div>

      <div>
        <CostQuery vehicleId={vehicleId} />
      </div>
    </div>
  );
};
