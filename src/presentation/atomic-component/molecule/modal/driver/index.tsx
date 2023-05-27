import { Add } from '@mui/icons-material';
import { DriverForm } from 'presentation/atomic-component/molecule/form/driver';
import { ListItemButton } from '@mui/material';
import { Modal } from 'presentation/atomic-component/atom';
import { useModal } from 'data/hooks';
import type { FC, ReactNode } from 'react';

interface DriverModalProps {
  openElement?: ReactNode;
}
export const DriverModal: FC<DriverModalProps> = ({ openElement }) => {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <Modal
      closeModal={closeModal}
      disableBackdrop
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        openElement ? (
          <div className={'flex'} onClick={(): void => openModal()}>
            {openElement}
          </div>
        ) : (
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
        )
      }
      title={'Novo motorista'}
    >
      <DriverForm closeModal={closeModal} />
    </Modal>
  );
};
