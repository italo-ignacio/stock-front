import { Add } from '@mui/icons-material';
import { FleetForm } from 'presentation/atomic-component/molecule/form';
import { IconButton } from '@mui/material';
import { Modal } from 'presentation/atomic-component/atom';
import { useModal } from 'data/hooks';
import type { FC } from 'react';

export const FleetModal: FC = () => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        <IconButton onClick={(): void => openModal()}>
          <Add className={'text-primary dark:text-white'} />
        </IconButton>
      }
    >
      <FleetForm closeModal={closeModal} />
    </Modal>
  );
};
