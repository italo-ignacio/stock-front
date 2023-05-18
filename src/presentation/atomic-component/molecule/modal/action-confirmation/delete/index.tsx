import { Button, IconButton } from '@mui/material';
import { Error, RemoveCircleOutline } from '@mui/icons-material';
import { Modal } from 'presentation/atomic-component/atom/modal';
import { useDelete } from 'data/use-case';
import { useModal } from 'data/hooks';
import type { FC, ReactNode } from 'react';

interface DeleteConfirmationModalProps {
  text: string;
  highlightedText?: string;
  id: number | string;
  route: unknown;
  queryName: string;
  successMessage: string;
  openElement?: ReactNode;
}

export const DeleteConfirmationModal: FC<DeleteConfirmationModalProps> = ({
  text,
  id,
  highlightedText,
  route,
  queryName,
  successMessage,
  openElement
}) => {
  const { closeModal, openModal, isOpen } = useModal();

  const { handleDelete } = useDelete({
    closeModal,
    id,
    queryName,
    route,
    successMessage
  });

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      openModal={openModal}
      openModalElement={
        openElement ?? (
          <IconButton onClick={(): void => openModal()}>
            <RemoveCircleOutline color={'error'} />
          </IconButton>
        )
      }
      size={'full'}
    >
      <div
        className={
          'w-full h-full flex justify-center items-center flex-col p-4 gap-8 dark:text-white'
        }
      >
        <Error className={'text-primary dark:text-secondary'} fontSize={'large'} />

        <span className={'text-xl text-center'}>
          {text}

          {highlightedText ? (
            <>
              <br />
              <strong>{highlightedText}</strong>
            </>
          ) : null}
        </span>

        <div className={'flex flex-row gap-4  justify-between items-center'}>
          <Button onClick={handleDelete}>Sim</Button>

          <Button onClick={closeModal} variant={'outlined'}>
            Não
          </Button>
        </div>
      </div>
    </Modal>
  );
};
