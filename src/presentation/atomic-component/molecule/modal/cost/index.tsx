import { Add } from '@mui/icons-material';
import { CostForm } from 'presentation/atomic-component/molecule/form';
import { IconButton } from '@mui/material';
import { Modal } from 'presentation/atomic-component/atom';
import { useModal } from 'data/hooks';
import type { FC } from 'react';

interface CostModalProps {
  vehicleId: string;
}

export const CostModal: FC<CostModalProps> = ({ vehicleId }) => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <Modal
      closeModal={closeModal}
      disableBackdrop
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        <IconButton onClick={(): void => openModal()}>
          <Add className={'text-primary dark:text-white'} />
        </IconButton>
      }
      title={'Novo custo'}
    >
      <CostForm closeModal={closeModal} vehicleId={vehicleId} />
    </Modal>
  );
};
