/* eslint-disable @typescript-eslint/no-magic-numbers */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from 'presentation/style/palette';
import { getTheme } from 'store/theme/selector';
import { outlinedInputClasses } from '@mui/material';
import type { FC, ReactNode } from 'react';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    isSelect: true;
    dark: true;
  }
}
declare module '@mui/material/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}
declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    small: true;
    medium: true;
    large: true;
  }
}

interface Children {
  children: ReactNode;
}

// eslint-disable-next-line max-lines-per-function
export const MaterialUIProvider: FC<Children> = ({ children }: Children) => {
  const LightTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& input:-webkit-autofill': {
              '-webkit-box-shadow': '0 0 0 1000px transparent inset !important',
              transition: 'background-color 1s ease-in-out 0s'
            }
          }
        }
      }
    },
    palette: {
      divider: colors.primary,
      error: { main: colors.red },
      grey: colors.gray,
      info: { main: colors.info },
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      success: { main: colors.success },
      warning: { main: colors.warning }
    },
    typography: {
      fontFamily: 'Roboto'
    }
  });

  const DarkTheme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)'
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)'
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)'
            }
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& input:-webkit-autofill': {
              '-webkit-box-shadow': `0 0 0 1000px ${colors.gray[700]} inset !important`,
              '-webkit-text-fill-color': 'var(--TextField-brandBorderFocusedColor) !important',
              transition: 'background-color 10000s ease-in-out 0s'
            },
            '& label': {
              color: 'var(--TextField-brandBorderFocusedColor)',
              zIndex: '100'
            },
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
              zIndex: '100'
            },
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderFocusedColor': '#eeeeee',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            backgroundColor: colors.gray[700],
            borderRadius: '6px'
          }
        }
      }
    },
    palette: {
      divider: colors.primary,
      error: { main: colors.red },
      grey: colors.gray,
      info: { main: colors.info },
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      success: { main: colors.success },
      warning: { main: colors.warning }
    },
    typography: {
      fontFamily: 'Roboto'
    }
  });

  return (
    <ThemeProvider theme={getTheme() === 'dark' ? DarkTheme : LightTheme}>{children}</ThemeProvider>
  );
};
