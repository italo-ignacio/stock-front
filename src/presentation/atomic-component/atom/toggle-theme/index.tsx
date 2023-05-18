/* eslint-disable @typescript-eslint/no-magic-numbers */
import { DarkMode, LightMode } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';
import { colors } from 'presentation/style';
import { setTheme } from 'store/theme/slice';
import { useDispatch } from 'react-redux';
import { useTheme } from 'store/theme/selector';
import type { FC } from 'react';

export const ToggleTheme: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <div className={'border rounded-md bg-gray-150 dark:bg-gray-700 dark:border-gray-550'}>
      <ListItemButton
        onClick={(): void => {
          dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
        }}
        sx={{
          padding: '7px'
        }}
      >
        {theme === 'dark' ? (
          <LightMode
            style={{
              color: colors.gray[50]
            }}
          />
        ) : (
          <DarkMode
            style={{
              color: colors.gray[800]
            }}
          />
        )}
      </ListItemButton>
    </div>
  );
};
