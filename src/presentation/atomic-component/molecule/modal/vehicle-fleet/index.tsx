import { Add } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { Modal } from 'presentation/atomic-component/atom';
import { VehicleFleetForm } from 'presentation/atomic-component/molecule/form';
import { useModal } from 'data/hooks';
import type { FC } from 'react';

export const VehicleFleetModal: FC = () => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <Modal
      closeModal={closeModal}
      disableBackdrop
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        <Tooltip title={'Nova frota'}>
          <IconButton onClick={(): void => openModal()}>
            <Add color={'primary'} />
          </IconButton>
        </Tooltip>
      }
    >
      <VehicleFleetForm closeModal={closeModal} />
    </Modal>
  );
};
