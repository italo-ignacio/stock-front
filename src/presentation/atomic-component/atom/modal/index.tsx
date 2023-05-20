import { Box, Button, IconButton, Modal as ModalUI } from '@mui/material';
import { Heading } from 'presentation/atomic-component/atom/heading';

import { Close } from '@mui/icons-material';
import type { FC, ReactNode } from 'react';
import type { OverridableComponent } from '@mui/types';
import type { SvgIconTypeMap } from '@mui/material';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  button?: {
    title: string;
    StartIcon?: OverridableComponent<SvgIconTypeMap>;
    EndIcon?: OverridableComponent<SvgIconTypeMap>;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
  };
  title?: string;
  openModalElement?: ReactNode;
  size?: string | 'full' | 'large' | 'medium' | 'small';
  disableBackdrop?: boolean;
}

const sizes = {
  large: 1125,
  medium: 820,
  small: 590
};

const getWidth = (size?: string | 'full' | 'large' | 'medium' | 'small'): number | string => {
  switch (size) {
    case 'large':
      return sizes.large;
    case 'medium':
      return sizes.medium;
    case 'small':
      return sizes.small;
    case 'full':
      return 'max-content';
    default:
      if (size) return size;
      return 'max-content';
  }
};

export const Modal: FC<ModalProps> = ({ children, openModal, closeModal, ...props }) => (
  <>
    {props.button ? (
      <Button
        disabled={props.button.disabled}
        endIcon={props.button.EndIcon ? <props.button.EndIcon /> : null}
        onClick={openModal}
        startIcon={props.button.StartIcon ? <props.button.StartIcon /> : null}
        variant={props.button.variant}
      >
        {props.button.title}
      </Button>
    ) : (
      props.openModalElement
    )}

    <ModalUI hideBackdrop={props.disableBackdrop} onClose={closeModal} open={props.isOpen}>
      <>
        {props.disableBackdrop ? (
          <div className={'absolute overflow-hidden top-0 left-0 w-full h-screen bg-[#0000007f]'} />
        ) : null}

        <Box
          className={
            'bg-white max-h-[95%] dark:bg-gray-800 p-6 rounded-md flex flex-col gap-4 left-[50%] top-[50%] absolute translate-y-[-50%] translate-x-[-50%] max-w-[94%] laptop:max-w-[98%] overflow-auto'
          }
          sx={{
            width: getWidth(props.size)
          }}
        >
          {props.title ? (
            <Heading
              endElement={
                <IconButton onClick={closeModal}>
                  <Close className={'text-red dark:text-white'} />
                </IconButton>
              }
              title={props.title}
            />
          ) : null}

          {children}
        </Box>
      </>
    </ModalUI>
  </>
);

Modal.defaultProps = {
  size: 'medium'
};
