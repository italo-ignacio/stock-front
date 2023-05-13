import { Box, Button, IconButton, Modal as ModalUI } from '@mui/material';
import { Heading } from 'presentation/atomic-component/atom/heading';
import CloseIcon from '@mui/icons-material/Close';
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
  size?: 'full' | 'large' | 'medium' | 'small';
}

const sizes = {
  large: 1125,
  medium: 820,
  small: 590
};

const getWidth = (size?: 'full' | 'large' | 'medium' | 'small'): number | string => {
  switch (size) {
    case 'full':
      return 'auto';
    case 'large':
      return sizes.large;
    case 'medium':
      return sizes.medium;
    case 'small':
      return sizes.small;
    default:
      return 'auto';
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

    <ModalUI onClose={closeModal} open={props.isOpen}>
      <Box
        className={
          'bg-white p-6 rounded-md flex flex-col gap-4 left-[50%] top-[50%] absolute translate-y-[-50%] translate-x-[-50%] max-h-[96vh] max-w-[98%] overflow-auto'
        }
        sx={{ width: getWidth(props.size) }}
      >
        {props.title ? (
          <Heading
            endElement={
              <IconButton onClick={closeModal}>
                <CloseIcon color={'error'} />
              </IconButton>
            }
            title={props.title}
          />
        ) : null}

        {children}
      </Box>
    </ModalUI>
  </>
);

Modal.defaultProps = {
  size: 'medium'
};
