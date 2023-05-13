import { MenuItem as MenuItemUI } from '@mui/material';
import type { FC, ReactElement } from 'react';

interface MenuItemProps {
  icon: ReactElement;
  title: string;
  onClick: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({ icon, title, onClick }) => (
  <MenuItemUI onClick={onClick}>
    <div className={'flex justify-between items-center gap-2 text-secondary'}>
      {icon}
      <span>{title}</span>
    </div>
  </MenuItemUI>
);
