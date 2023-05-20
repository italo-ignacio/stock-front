import { Add } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { Modal } from 'presentation/atomic-component/atom';
import { VehicleForm } from 'presentation/atomic-component/molecule/form';
import { useModal } from 'data/hooks';
import type { FC } from 'react';

interface VehicleModalProps {
  fleetId: string;
}
export const VehicleModal: FC<VehicleModalProps> = ({ fleetId }) => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <Modal
      closeModal={closeModal}
      disableBackdrop
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        <Tooltip title={'Novo veículo'}>
          <IconButton onClick={(): void => openModal()}>
            <Add color={'primary'} />
          </IconButton>
        </Tooltip>
      }
      title={'Novo veículo'}
    >
      <VehicleForm closeModal={closeModal} fleetId={fleetId} />
    </Modal>
  );
};
