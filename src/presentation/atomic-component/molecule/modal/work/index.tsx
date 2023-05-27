import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Modal } from 'presentation/atomic-component/atom';
import { WorkForm } from 'presentation/atomic-component/molecule/form';
import { useModal } from 'data/hooks';
import type { FC } from 'react';

interface WorkModalProps {
  vehicleId: string;
}

export const WorkModal: FC<WorkModalProps> = ({ vehicleId }) => {
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
      title={'Novo trabalho'}
    >
      <WorkForm closeModal={closeModal} vehicleId={vehicleId} />
    </Modal>
  );
};
