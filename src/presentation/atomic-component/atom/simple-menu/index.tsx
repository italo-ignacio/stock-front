import { Menu } from '@mui/material';
import { useEffect, useState } from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import type { Dispatch, FC, MouseEvent, ReactNode, SetStateAction } from 'react';

interface SimpleMenuProps {
  children: ReactNode;
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  side?: 'left' | 'right';
}

export const SimpleMenu: FC<SimpleMenuProps> = ({ children, isOpen, setIsOpen, side }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    if (setIsOpen) setIsOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (isOpen !== undefined) if (!isOpen) setAnchorEl(null);
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={(event): void => {
          handleClick(event);
        }}
        type={'button'}
      >
        <MoreHorizOutlinedIcon />
      </button>

      <Menu
        MenuListProps={{
          'aria-labelledby': 'button'
        }}
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: side === 'right' ? 'right' : 'left', vertical: 'center' }}
        id={'menu'}
        onClose={handleClose}
        open={open}
        transformOrigin={{ horizontal: side === 'right' ? 'left' : 'right', vertical: 'top' }}
      >
        {children}
      </Menu>
    </div>
  );
};
