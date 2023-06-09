import { Add } from '@mui/icons-material';
import { DriverForm } from 'presentation/atomic-component/molecule/form/driver';
import { IconButton } from '@mui/material';
import { Modal } from 'presentation/atomic-component/atom';
import { useModal } from 'data/hooks';
import type { FC } from 'react';

interface DriverModalProps {
  id?: string;
}

export const DriverModal: FC<DriverModalProps> = ({ id }) => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <Modal
      closeModal={closeModal}
      disableBackdrop
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        <IconButton id={id} onClick={(): void => openModal()}>
          <Add className={'text-primary dark:text-white'} />
        </IconButton>
      }
      title={'Novo motorista'}
    >
      <DriverForm closeModal={closeModal} />
    </Modal>
  );
};
