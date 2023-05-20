import { Add } from '@mui/icons-material';
import { DriverForm } from 'presentation/atomic-component/molecule/form/driver';
import { ListItemButton } from '@mui/material';
import { Modal } from 'presentation/atomic-component/atom';
import { useModal } from 'data/hooks';
import type { FC } from 'react';

export const DriverModal: FC = () => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <Modal
      closeModal={closeModal}
      disableBackdrop
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        <ListItemButton
          className={'flex gap-1 items-center h-[56px] dark:text-white'}
          onClick={(): void => {
            openModal();
          }}
          sx={{
            padding: 0
          }}
        >
          <Add />
          Motorista
        </ListItemButton>
      }
      size={'80%'}
      title={'Novo motorista'}
    >
      <DriverForm closeModal={closeModal} />
    </Modal>
  );
};
